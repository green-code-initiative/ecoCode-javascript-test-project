#!/usr/bin/env sh

# "sonar.token" variable : private TOKEN generated in your local SonarQube during installation
# (input paramater of this script)

# building phase
yarn install

# sending to Sonar phase
#yarn sonar:sonar -Dsonar.host.url=http://localhost:8000 -Dsonar.login=admin -Dsonar.password=chiheb
yarn sonar -Dsonar.token=sqa_f3ffd2ce15ddac2783f2bd2c01aac927e7a27656
