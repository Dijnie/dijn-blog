/* This is a script for creating new blog post markdown files with front-matter */

import fs from "fs"
import path from "path"

// Function to get current date in YYYY-MM-DD format
function getDate() {
  const today = new Date()
  return today.toISOString().split("T")[0]
}

// Get command line arguments
const args = process.argv.slice(2)

// Check if filename argument is provided
if (args.length === 0) {
  console.error(`Error: No filename argument provided
Usage: npm run new-post -- <filename>`)
  process.exit(1) // Terminate script and return error code 1
}

let fileName = args[0]

// If filename doesn't include .md or .mdx extension, add .md
const fileExtensionRegex = /\.(md|mdx)$/i
if (!fileExtensionRegex.test(fileName)) {
  fileName += ".md"
}

// Define target directory
const targetDir = "./src/content/posts/"

// Use path.resolve to get absolute path
const fullPath = path.resolve(targetDir, fileName)

// Check if file already exists
if (fs.existsSync(fullPath)) {
  console.error(`Error: File ${fullPath} already exists`)
  process.exit(1)
}

// If directory doesn't exist, create it
const dirPath = path.dirname(fullPath)
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true })
}

// Generate front-matter content
// Use filename (without extension) as default title
const title = fileName.replace(fileExtensionRegex, "")
const content = `---
title: ${title}
published: ${getDate()}
description: ''
image: ''
tags: []
category: ''
draft: false 
lang: ''
---
`

// Write file
fs.writeFileSync(fullPath, content)

// Output success message
console.log(`Post ${fullPath} has been created`)