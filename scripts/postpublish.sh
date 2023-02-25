#!/bin/bash
set -euf -o pipefail

PACKAGE_VERSION=$(cat package.json | grep \\\"version\\\" | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')
git tag v$PACKAGE_VERSION
git push --tags

unset PACKAGE_VERSION