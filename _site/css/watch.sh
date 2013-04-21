#!/bin/sh

# Change `style.css` or `style.min.css` to whatever you would like your compiled
# stylesheet to be called. Do not rename `style.scss` or alter references to it.

# No minification
#sass --watch style.scss:style.css --style expanded

# Source maps for the browser

# sass --watch --debug-info --scss --sourcemap style.scss:style.css

sass --watch style.scss:style.min.css --style compressed

exit 0
