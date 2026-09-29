$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
Set-Location ..

Write-Host ""
Write-Host "=== ACTUALIZARD PRECHECK ===" -ForegroundColor Cyan

$required = @(
  "package.json",
  "app\page.tsx",
  "app\admin\page.tsx",
  "app\api\health\route.ts",
  "lib\scraping\engine.ts",
  "lib\ai\editorial.ts",
  "lib\stories\cluster.ts",
  "lib\video\pipeline.ts"
)

foreach ($file in $required) {
  if (Test-Path $file) {
    Write-Host "OK  $file" -ForegroundColor Green
  } else {
    throw "FALTA $file"
  }
}

if (Test-Path "node_modules") {
  npm run typecheck
  npm run build
} else {
  Write-Host "node_modules no existe. Ejecuta npm install." -ForegroundColor Yellow
}

Write-Host "PRECHECK COMPLETADO" -ForegroundColor Green
