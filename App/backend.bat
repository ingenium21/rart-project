CD ..\frontend
COPY build\index.html.gz ..\App\data\
CD ..\App
SET GOPATH=%CD%\..\gopath
SET GOROOT=%CD%\..\go
SET PATH=%GOROOT%\bin;%PATH%;
%GOPATH%\bin\pkger.exe
..\go\bin\go.exe build -o app.exe main.go helpers.go pkged.go
app.exe
