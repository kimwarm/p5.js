@echo off
chcp 65001
git add .
git status
set /p commitMessage=커밋 메시지를 입력하세요: 
git commit -m "%commitMessage%"
git push origin main