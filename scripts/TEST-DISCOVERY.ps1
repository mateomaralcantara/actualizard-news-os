$ErrorActionPreference = "Stop"

$BaseUrl =
    "http://localhost:3000"

Write-Host ""
Write-Host "==============================================" -ForegroundColor Cyan
Write-Host " ACTUALIZARD DISCOVERY - TEST REAL" -ForegroundColor Cyan
Write-Host "==============================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Estado inicial..." -ForegroundColor Yellow

$Before =
    Invoke-RestMethod `
        -Uri "$BaseUrl/api/discovery/state"

$Before |
    ConvertTo-Json `
        -Depth 10

Write-Host ""
Write-Host "Ejecutando Discovery Engine..." -ForegroundColor Yellow

$Run =
    Invoke-RestMethod `
        -Uri "$BaseUrl/api/discovery/run" `
        -Method POST `
        -TimeoutSec 240

$Run |
    ConvertTo-Json `
        -Depth 10

Write-Host ""
Write-Host "Estado final..." -ForegroundColor Yellow

$After =
    Invoke-RestMethod `
        -Uri "$BaseUrl/api/discovery/state"

$After |
    ConvertTo-Json `
        -Depth 10

Write-Host ""
Write-Host "==============================================" -ForegroundColor Green
Write-Host " TEST COMPLETADO" -ForegroundColor Green
Write-Host "==============================================" -ForegroundColor Green