@echo off
setlocal

title VSCode Web Serverless

pushd %~dp0\..

:: Sync built-in extensions
call yarn download-builtin-extensions

:: Node executable
FOR /F "tokens=*" %%g IN ('node build/lib/node.js') do (SET NODE=%%g)

if not exist "%NODE%" (
	:: Download nodejs executable for remote
	call yarn gulp node
)

:: Launch Server
call "%NODE%" scripts\code-web.js %*

popd

endlocal
