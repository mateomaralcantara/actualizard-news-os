$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
Set-Location ..

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " ACTUALIZARD NEWS OS" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

if (-not (Test-Path ".env.local")) {
    Copy-Item ".env.example" ".env.local"
    Write-Host "Creado .env.local desde .env.example" -ForegroundColor Green
}

if (-not (Test-Path "node_modules")) {
    Write-Host "Instalando dependencias..." -ForegroundColor Yellow
    npm install
}

Write-Host "Iniciando en http://localhost:3000" -ForegroundColor Green
npm run dev
