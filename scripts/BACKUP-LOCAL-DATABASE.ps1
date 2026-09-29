$ErrorActionPreference = "Stop"

$ProjectPath =
    "C:\Users\martin\Desktop\VSC\BestS\actualizard-news-os"

Set-Location $ProjectPath

$Database =
    Join-Path `
        $ProjectPath `
        "data\actualizard.sqlite"

if (
    -not (
        Test-Path `
            -LiteralPath $Database
    )
) {

    throw "La base actualizard.sqlite todavia no existe."
}


$BackupFolder =
    Join-Path `
        $ProjectPath `
        "data\backups"

New-Item `
    -ItemType Directory `
    -Path $BackupFolder `
    -Force |
    Out-Null


$Stamp =
    Get-Date `
        -Format "yyyyMMdd-HHmmss"

$Destination =
    Join-Path `
        $BackupFolder `
        "actualizard-$Stamp.sqlite"


Write-Host ""
Write-Host "Deten npm run dev antes de realizar backup en caliente." -ForegroundColor Yellow
Write-Host ""

Copy-Item `
    -LiteralPath $Database `
    -Destination $Destination `
    -Force


Write-Host "Backup creado:" -ForegroundColor Green
Write-Host $Destination -ForegroundColor White