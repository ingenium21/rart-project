curl https://nodejs.org/dist/v14.4.0/node-v14.4.0-win-x64.zip -o node.zip
tar -xvf node.zip
SET CURR_DIR=%CD%
MV node-v14.4.0-win-x64 node
CD node\
CALL .\nodevars.bat
CD /d "%CURR_DIR%"
CD frontend\
npm install
