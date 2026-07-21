@echo off
setlocal
set "EDGE=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
set "OUT=C:\Users\R10EC~1.ROS\AppData\Local\Temp\od-footer-pdf"
if not exist "%OUT%" mkdir "%OUT%"

"%EDGE%" --headless=new --disable-gpu --no-pdf-header-footer --run-all-compositor-stages-before-draw --user-data-dir="%OUT%\profile-kunde" --print-to-pdf="%OUT%\Kundenbroschuere.pdf" "file:///C:/Users/R10EC~1.ROS/AppData/Roaming/OPENDE~1/NAMESP~1/RELEAS~1/data/projects/C68883~1/broschuere/broschuere-gesamt.html"
if errorlevel 1 exit /b 1

"%EDGE%" --headless=new --disable-gpu --no-pdf-header-footer --run-all-compositor-stages-before-draw --user-data-dir="%OUT%\profile-fundament" --print-to-pdf="%OUT%\Fundament-Skizze-Oval-Sauna-Premium.pdf" "file:///C:/Users/R10EC~1.ROS/AppData/Roaming/OPENDE~1/NAMESP~1/RELEAS~1/data/projects/C68883~1/broschuere/fundament-skizze-oval-sauna-premium.html"
if errorlevel 1 exit /b 1

"%EDGE%" --headless=new --disable-gpu --no-pdf-header-footer --run-all-compositor-stages-before-draw --user-data-dir="%OUT%\profile-vorlage" --print-to-pdf="%OUT%\Vorlage-Kopf-Fusszeile.pdf" "file:///C:/Users/R10EC~1.ROS/AppData/Roaming/OPENDE~1/NAMESP~1/RELEAS~1/data/projects/C68883~1/broschuere/vorlage-kopf-fusszeile.html"
exit /b %errorlevel%
