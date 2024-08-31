#!/bin/bash

# Check if the file exists
if [ ! -f "version.txt" ]; then
  echo "File version.txt not found!"
  exit 1
fi

# Read the version from the file
VERSION=$(cat version.txt)

# Run the command with the VERSION environment variable
VERSION=$VERSION docker-compose up -d
