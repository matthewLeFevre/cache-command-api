#!/bin/bash
# This is for CI/CD
/usr/share/yarn install
/usr/share/yarn compile
/usr/share/yarn test
/root/.nvm/versions/node/v14.17.1/bin/pm2 restart # name of app in pm2