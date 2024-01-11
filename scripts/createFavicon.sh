#!/usr/bin/env bash

baseFile=$1
outputFile="$2/favicon.ico"
echo "Creating favicon from '$baseFile'..."
if [ ! -f $baseFile ]; then
  echo "No such file '$baseFile'"
  exit 1
fi
if [ -f $outputFile ]; then
  echo "Existing file found: '$outputFile'. Created a backup at '$outputFile.bak'"
  mv $outputFile $outputFile.bak
fi
convert -density 384 -background transparent -colorize 100 $baseFile -define icon:auto-resize -colors 256 $outputFile
echo "Done!"