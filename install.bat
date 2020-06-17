curl https://dl.google.com/go/go1.14.4.windows-amd64.zip -o go.zip
tar -xvf go.zip
SET GO111MODULE=on
SET GOPATH=%CD%\gopath
MKDIR %GOPATH%
SET GOEXE=%CD%\go\bin\go.exe
SET GOROOT=%CD%\go
SET GOBIN=%GOPATH%\bin
SET PATH=%PATH%;%GOROOT%\bin
cd App
%GOEXE% mod init app
%GOEXE% get -u github.com/gin-gonic/gin@v1.6.3
%GOEXE% get github.com/markbates/pkger/cmd/pkger
%GOPATH%\bin\pkger.exe
