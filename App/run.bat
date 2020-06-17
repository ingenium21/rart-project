SET GOPATH=%CD%\..\gopath
..\go\bin\go.exe build -o app.exe main.go helpers.go pkged.go
app.exe
