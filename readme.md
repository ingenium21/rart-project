# rart-project
This project is to create a dropbox clone using ipfs (I think, lol).

We will be using Golang with gin as the web framework

Steps.

```
clone repo
open commandline in repo root folder
run install.bat if you haven't before
run install_node.bat if you haven't before

Go into frontend folder and run "npm run build".
    This will allow the backend to serve the frontend

For backend:
if you updated the frontend you will need to run the pkgr.bat file again to generate updated pkged.go file

Open App folder in VSCode to get Go intellisense and linting etc
Note: You will need the index.html in the data/ folder for the app to work

For frontend:
Open frontend folder in VSCode
```

build.bat - build exe

run.bat - run and build exe

pkgr.bat - run pkger.exe to create pkged.go generated file
