CD ..\frontend
CALL .\build.bat
CD ..\App
SET GOPATH=%CD%\..\gopath
SET GOROOT=%CD%\..\go
SET PATH=%PATH%;%GOROOT%\bin
%GOPATH%\bin\pkger.exe
..\go\bin\go.exe build -o app.exe main.go helpers.go pkged.go
app.exe
