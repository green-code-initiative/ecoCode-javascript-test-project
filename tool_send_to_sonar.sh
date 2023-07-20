#!/usr/bin/env sh

# "sonar.login" variable : private TOKEN generated in your local SonarQube during installation
# (input paramater of this script)

# building phase
yarn install

# sending to Sonar phase
yarn sonar -Dsonar.login=$1
