#!/usr/bin/env sh

# "sonar.login" variable : private TOKEN generated in your local SonarQube during installation
# (input paramater of this script)

yarn install
yarn lint:report
yarn sonar -Dsonar.login=$1
