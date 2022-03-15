#!/usr/bin/env bash
set -x

# Transform Figma Tokens JSON to something Style Dictionary can read
npx token-transformer tokens.json tokens/global.json global
# Create a light theme, exclude the global tokens
npx token-transformer tokens.json tokens/light.json global,light,theme global
# Create a dark theme, exclude the global tokens
npx token-transformer tokens.json tokens/dark.json global,dark,theme global
# Convert tokens according to Style Dictionary config
node build-css-from-tokens.js
