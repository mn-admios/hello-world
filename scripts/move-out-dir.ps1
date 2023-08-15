$sourceDir = "c:\actions-runner\_work\hello-world\hello-world\out"
$destinationDir = "c:\hello-world-app"

if (!(Test-Path -Path $destinationDir)) {
  New-Item -ItemType Directory -Force -Path $destinationDir
}

Get-ChildItem -Path $sourceDir | Move-Item -Destination $destinationDir

Write-Host "Files moved successfully to $destinationDir"