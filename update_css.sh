#!/bin/bash

# Define the file to update
FILE="/Users/mohamedsayed/Desktop/AR-v2/css/style.css"

# Create a temporary file
TMP=$(mktemp)

# Use sed to replace physical properties with logical ones
sed -e 's/right: -100px;/inset-inline-end: -100px;/g' \
    -e 's/left: -100px;/inset-inline-start: -100px;/g' \
    -e 's/  left: 0;/  inset-inline-start: 0;/g' \
    -e 's/  right: 0;/  inset-inline-end: 0;/g' \
    -e 's/right: -100%;/inset-inline-end: -100%;/g' \
    -e 's/border-left: var(--border-subtle);/border-inline-start: var(--border-subtle);/g' \
    -e 's/  right: 3px;/  inset-inline-end: 3px;/g' \
    -e 's/  right: auto;/  inset-inline-end: auto;/g' \
    -e 's/  left: 3px;/  inset-inline-start: 3px;/g' \
    -e 's/border-right: var(--border-subtle);/border-inline-end: var(--border-subtle);/g' \
    -e 's/  left: 50%;/  inset-inline-start: 50%;/g' \
    -e 's/margin-left: auto;/margin-inline-start: auto;/g' \
    -e 's/margin-right: auto;/margin-inline-end: auto;/g' \
    -e 's/padding-right: 20px;/padding-inline-start: 20px;/g' \
    -e 's/text-align: right;/text-align: start;/g' \
    -e 's/top: 3px; right: 3px;/top: 3px; inset-inline-end: 3px;/g' \
    -e 's/right: auto; left: 3px;/inset-inline-end: auto; inset-inline-start: 3px;/g' \
    -e 's/  left: 4px;/  inset-inline-start: 4px;/g' \
    "$FILE" > "$TMP"

# Move the temporary file back
mv "$TMP" "$FILE"
