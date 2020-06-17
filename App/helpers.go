package main

import (
	"io"
	"strings"

	"github.com/markbates/pkger/pkging"
)

func panicOnErr(err error) {
	if err != nil {
		panic(err)
	}
}

func getStringFromFile(file pkging.File, err error) string {
	panicOnErr(err)
	buf := new(strings.Builder)
	n, err := io.Copy(buf, file)
	_ = n
	panicOnErr(err)
	return buf.String()
}
