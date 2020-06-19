package main

import (
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

func main() {
	portableExe()
	settings := getSettings()

	fmt.Println(settings)

	r := gin.Default()

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.GET("/app/*catchAll", handleApp)

	r.Run() // localhost:8080
}
