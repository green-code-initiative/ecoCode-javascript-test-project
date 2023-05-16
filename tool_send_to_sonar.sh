#!/usr/bin/env sh

# "sonar.login" variable : private TOKEN generated in your local SonarQube during installation
# (input paramater of this script)

# requirements : yarn installed with 
# "npm instal yarn"

# building phase
yarn install

# analysis phase
yarn lint:report

# sending to Sonar phase
yarn sonar -Dsonar.login=$1
