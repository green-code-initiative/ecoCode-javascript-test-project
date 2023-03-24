A sample JavaScript project to test ESLint and SonarQube plugins of ecoCode.

👉 See [ecoCode](https://github.com/green-code-initiative/ecoCode) and [ecoCode-linter](https://github.com/green-code-initiative/ecoCode-linter) projects.

## Purpose of this project

This project allows to test the rules edited by the ecoCode project for the JavaScript language.\
The files in this repository contain both compliant and non-compliant code.

### 1. Setup local environment

First, follow [this complete guide](https://github.com/green-code-initiative/ecoCode-common/blob/main/doc/INSTALL.md#howto-install-sonarqube-dev-environment) to install your local SonarQube development environment.

This project works with Yarn (or npm). It is required to install the necessary dependencies:

```sh
# yarn
yarn install
# npm
npm install
```

### 2. Send Sonar metrics to local SonarQube

- Generate the ESLint report: `yarn lint:report`
- Start Sonar Scanner: `yarn sonar -Dsonar.login=MY_SONAR_TOKEN`

### 3. Check errors

On your SonarQube instance, check if each JavaScript file contains the rule error defined for this class (you can search for tag `eco-design` rule on a special file).
