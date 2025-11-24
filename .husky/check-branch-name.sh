#!/bin/sh

branch_name=$(git symbolic-ref --short HEAD)

if [ "$branch_name" = "main" ] || [ "$branch_name" = "staging" ]; then
  exit 0
fi

if ! echo "$branch_name" | grep -qE '^(feat|hot|enhancement|bug)\/'; then
  echo "Error: Branch name must start with feat/, hot/, enhancement/, or bug/"
  exit 1
fi
