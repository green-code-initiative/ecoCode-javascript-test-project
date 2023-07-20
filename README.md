A sample project to test SonarQube and ESLint plugins of **ecoCode-javascript**.

👉 See [ecoCode-javascript](https://github.com/green-code-initiative/ecoCode-javascript) project.

## Purpose of this project

This project allows to test the rules edited by the ecoCode project for the JavaScript language.\
The files in this repository contain both compliant and non-compliant code.

### 1. Setup local environment

First, follow [this complete guide](https://github.com/green-code-initiative/ecoCode-common/blob/main/doc/INSTALL.md#howto-install-sonarqube-dev-environment) to install your local SonarQube development environment. \
Then, check that _ecoCode_ rules are enabled in the quality profile that will be used during the analysis.

You will also need some JavaScript tools installed on your computer:

- Node.js 14.17.x, 16.x, 18.x or newer
- Yarn (install it globally with `npm install -g yarn`)

### 2. Send Sonar metrics to local SonarQube

Use the following Shell script which will do the job for you:

```sh
./tool_send_to_sonar.sh MY_SONAR_TOKEN
```

Or you can manually run these commands:

- Install dependencies: `yarn install`
- Start Sonar Scanner: `yarn sonar -Dsonar.login=MY_SONAR_TOKEN`

### 3. Check errors

On your SonarQube instance, check if each JavaScript file contains the rule error defined for this class (you can search for tag `eco-design` rule on a special file).
