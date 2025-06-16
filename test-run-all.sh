#!/bin/bash

# * - default option

# Options: chromium *, firefox, webkit
export BROWSER=chromium

# Options: true, false *
export BROWSER_HEADLESS=false

npx cucumber-js test