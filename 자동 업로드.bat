@echo off
chcp 65001
set /p commitMessage=커밋 메시지를 입력하세요: 
git add .
git status
git commit -m "%commitMessage%"
git push origin main