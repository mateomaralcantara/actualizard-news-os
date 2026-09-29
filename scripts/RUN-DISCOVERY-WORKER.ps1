$ErrorActionPreference = "Continue"

$ProjectPath =
    "C:\Users\martin\Desktop\VSC\BestS\actualizard-news-os"

Set-Location $ProjectPath

$BaseUrl =
    "http://localhost:3000"

$Interval =
    300

$EnvFile =
    Join-Path $ProjectPath ".env.local"

if (Test-Path $EnvFile) {

    foreach (
        $Line in Get-Content $EnvFile
    ) {

        if (
            $Line -match
            '^DISCOVERY_INTERVAL_SECONDS=(.+)$'
        ) {

            $Parsed = 0

            if (
                [int]::TryParse(
                    $Matches[1],
                    [ref]$Parsed
                )
            ) {

                $Interval =
                    [math]::Max(
                        60,
                        $Parsed
                    )
            }
        }
    }
}

Write-Host ""
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " ACTUALIZARD DISCOVERY WORKER" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Intervalo: $Interval segundos" -ForegroundColor Yellow
Write-Host "CTRL+C para detener." -ForegroundColor DarkGray
Write-Host ""

while ($true) {

    $Now =
        Get-Date -Format "HH:mm:ss"

    Write-Host "[$Now] Discovery..." -ForegroundColor Cyan

    try {

        $Result =
            Invoke-RestMethod `
                -Uri "$BaseUrl/api/discovery/run" `
                -Method POST `
                -TimeoutSec 240

        Write-Host `
            "Nuevas: $($Result.run.storiesAdded) | Clusters: $($Result.clusters) | Duplicadas: $($Result.run.duplicatesRejected)" `
            -ForegroundColor Green

        if (
            $Result.run.errors.Count -gt 0
        ) {

            Write-Host `
                "Incidencias parciales: $($Result.run.errors.Count)" `
                -ForegroundColor Yellow
        }

    } catch {

        Write-Host `
            "Discovery fallo: $($_.Exception.Message)" `
            -ForegroundColor Red
    }

    Write-Host ""
    Write-Host "Proxima ejecucion en $Interval segundos..." -ForegroundColor DarkGray
    Write-Host ""

    Start-Sleep `
        -Seconds $Interval
}