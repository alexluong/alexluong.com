#!/bin/bash

# Check if the file exists
if [ ! -f "version.txt" ]; then
  echo "File version.txt not found!"
  exit 1
fi

# Read the file and extract the version string
version=$(grep -Eo '[0-9]+\.[0-9]+' version.txt)

# Check if a version string was found
if [ -z "$version" ]; then
  echo "No version string in the format of x.y found in version.txt"
  exit 1
fi

# Extract major and minor versions
major_version=$(echo "$version" | cut -d '.' -f 1)
minor_version=$(echo "$version" | cut -d '.' -f 2)

# Increment the minor version
new_minor_version=$((minor_version + 1))

# Create the new version string
new_version="${major_version}.${new_minor_version}"

# Update the version.txt file
echo "$new_version" > version.txt

# Log before Docker build
echo "Building Docker image alexluong/personal:alexluong.com-${new_version}..."

# Build the Docker image
docker build -t alexluong/personal:alexluong.com-${new_version} . --platform linux/amd64

# Check if the Docker build was successful
if [ $? -ne 0 ]; then
  echo "Docker build failed!"
  exit 1
fi

# Log before Docker push
echo "Pushing Docker image alexluong/personal:alexluong.com-${new_version}..."

# Push the Docker image
docker push alexluong/personal:alexluong.com-${new_version}

# Check if the Docker push was successful
if [ $? -ne 0 ]; then
  echo "Docker push failed!"
  exit 1
fi

# Log before git commit
echo "Committing the version update to git..."

# Commit the change with a conventional commit message
git add version.txt
git commit -m "chore: bump version to ${new_version}"

# Echo the new version
echo "New version: $new_version"
