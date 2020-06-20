SET CURR_DIR=%CD%
CD ..\node\
call .\nodevars.bat
CD /d "%CURR_DIR%"
npm run start
