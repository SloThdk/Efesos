@echo off
echo Killing port 3004...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3004') do (
    taskkill /PID %%a /F 2>nul
)

echo Removing .next lock...
if exist .next\dev (
  if exist .next\dev\lock del /f /q .next\dev\lock
)

echo Starting Restaurant Efesos dev server on port 3004...
start "" http://localhost:3004
call npm run dev -- --port 3004
