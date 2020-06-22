curl https://nodejs.org/dist/v14.4.0/node-v14.4.0-win-x64.zip -o node.zip
tar -xvf node.zip
MOVE node-v14.4.0-win-x64 node
SET CURR_DIR=%CD%
CD node\
CALL .\nodevars.bat
CD /d "%CURR_DIR%"
CD frontend\
npm install
