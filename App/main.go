package main

import (
	"flag"
	"fmt"
	"io"
	"os"
	"path/filepath"

	"github.com/gin-gonic/gin"
	"github.com/markbates/pkger"
)

func getExecutable() string {
	ex, err := os.Executable()
	panicOnErr(err)
	return ex
}

func changeDir(path string) {
	err := os.Chdir(path)
	panicOnErr(err)
}

// Regardless of which directory it is run from, we want the app
// to use the exe's directory as the working directory.
// This way we can ensure all our relative paths always work.
func portableExe() {
	ex := getExecutable()
	exPath := filepath.Dir(ex)
	changeDir(exPath)
}

// TODO: return a Settings struct
func getSettings() string {
	file, err := pkger.Open("/data/settings.json")
	return getStringFromFile(file, err)
}

func handleApp(c *gin.Context) {
	file, err := pkger.Open("/data/index.html")
	panicOnErr(err)
	io.Copy(c.Writer, file)
}

func corsMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func main() {
	portableExe()

	mode := flag.String("mode", "production", "Mode for the program")
	flag.Parse()

	settings := getSettings()

	fmt.Println(settings)

	r := gin.Default()

	fmt.Println(*mode)

	if *mode == "develop" {
		r.Use(corsMiddleware())
	}

	r.GET("/api/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.GET("/app/*catchAll", handleApp)

	r.Run() // localhost:8080
}
