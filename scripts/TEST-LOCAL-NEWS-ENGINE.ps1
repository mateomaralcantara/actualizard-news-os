$ErrorActionPreference = "Stop"

$BaseUrl =
    "http://localhost:3000"

Write-Host ""
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host " ACTUALIZARD - LOCAL DATABASE TEST" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "[1/3] Database status..." -ForegroundColor Yellow

$Database =
    Invoke-RestMethod `
        -Uri "$BaseUrl/api/database/status" `
        -Method GET `
        -TimeoutSec 30

$Database |
    ConvertTo-Json `
        -Depth 10


Write-Host ""
Write-Host "[2/3] Ejecutando Discovery..." -ForegroundColor Yellow

$Discovery =
    Invoke-RestMethod `
        -Uri "$BaseUrl/api/discovery/run" `
        -Method POST `
        -TimeoutSec 240

$Discovery |
    ConvertTo-Json `
        -Depth 10


Write-Host ""
Write-Host "[3/3] Database status final..." -ForegroundColor Yellow

$After =
    Invoke-RestMethod `
        -Uri "$BaseUrl/api/database/status" `
        -Method GET `
        -TimeoutSec 30

$After |
    ConvertTo-Json `
        -Depth 10


Write-Host ""
Write-Host "============================================================" -ForegroundColor Green
Write-Host " PRUEBA LOCAL COMPLETADA" -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Green