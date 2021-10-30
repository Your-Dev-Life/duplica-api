# Duplica API

## Overview

This is the API for the Duplica System. It is written in [Typescript](https://www.typescriptlang.org/) and runs on [AWS Lambda](https://aws.amazon.com/lambda/) using the [Serverless framework](https://www.serverless.com/). The database is [DynamoDB](https://aws.amazon.com/dynamodb/). The access to the API in the different environments is secured by [WAF](https://aws.amazon.com/waf/).

---
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/baebd21de6884076b473d8a9747793fe)](https://app.codacy.com/gh/Your-Dev-Life/duplica-api?utm_source=github.com&utm_medium=referral&utm_content=Your-Dev-Life/duplica-api&utm_campaign=Badge_Grade_Settings)

## Prerequisites

### Node.js
The project runs on [Node.js v14](https://nodejs.org/en/), which has full ES2020 support.

### DynamoDB Local

#### Install Java on OSX with an Intel CPU
To be able to run dynamodb locally, you first have to install Java on your machine. The easiest way to install it on OSX is by using brew: `brew install --cask adoptopenjdk16`

#### Install Java on OSX with a M1 CPU

First, [download and install the Azul Zulu build of OpenJDK](https://www.azul.com/downloads/?version=java-16-sts&os=macos&architecture=x86-64-bit&package=jdk).
Then, check that the version of Java used in your Rosetta terminal is JDK 16 with `java -version`.

In case a different version of Java is used, [switch it from the terminal](https://docs.azul.com/core/zulu-openjdk/manage-multiple-zulu-versions/macos). If that still doesn't work, make sure that the *JAVA_HOME* path in your *~/.bash_profile* is pointing to the *zulu-15.jdk* folder.

#### Install dynamodb-local

Install DynamoDB locally: `npm run db:install`

#### Importing data from the dev database to your local database

Follow the steps in the README.md file located in the `dev` folder;

Then run: `npm run db:syncDevToLocal` to override the local data with the dev data.

## Credentials

To run the project using serverless you will need to first configure AWS credentials locally.
Request an AWS access key and secret key from the project admin.

## Project setup
    
 1. Configure serverless to use your AWS credentials: `serverless config credentials --provider aws --key YOUR_AWS_ACCESS_KEY --secret YOUR_AWS_SECRET_KEY`
 2. You need to configure your environment variables. Copy the `.env.example` file at the root to a new file called `.env` and set the correct value for the variables (ask someone in the team). The `.env` file is not versioned, so any sensitive data it may contain will never be pushed on the remote repository.
 3. Then, you can install the dependencies by running `npm install` from the root folder of the project.
 4. Finally, you have to download dynamodb locally by running: `npm run db:install` (Only if you don't sync dev to local).

## Running the project

Every time you need to work in this project, you need to follow these steps:

1. The first step is to start the typescript watcher with: `npm run watch`. Everytime you make a change in any of the files, the watcher will recompile the files that have changed without recompiling the whole project (incremental builds).
2. Once your watcher is running, you can start dynamodb locally: `npm run db:start`. Starting the database will automatically seed it with the data contained in the `src/database/seed` everytime you run it. The data is not persisted between the runs.
3. Finally, when your watcher and your local database are running, you can start the project with `npm start`.

## Useful commands

Run the tests: `npm test`

Start the emulated offline API gateway: `npm start`

Invoke a lambda locally: `serverless invoke local -f functionName`

Invoke a lambda remotely: `serverless invoke -f functionName`

Generate the code for a function and its test: `serverless create function -f handler --handler src/handlers/myHandler`

Generate only a test: `serverless create test -f functionName`

Deploy on AWS: `serverless deploy`

## DynamoDb Local Gui

Run `npm run dbgui`

Access `http://localhost:8001/` from your browser
