#!/bin/sh

branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

if [ "$branch" = "master" ]; then
  npm run deploy -- --token=$FIREBASE_TOKEN
elif [ "$branch" = "compilorama" ]; then
  npm run deploy -- --token=$COMP_FB_TOKEN -P $COMP_FB_PROJECT
else
  echo "skipped"
fi
