# Celerity Team

This repo uses the Webdriver.io with Mocha frameworks to test

## Environment Setup

### NodeJS

Install **NodeJS** from https://nodejs.org/
This repo was only tested with Node version 10.13.0. The NVM tool can be used to install a specific Node version

### Install NVM (optional):

#### Linux, OSX & (maybe Windows with WSL)
https://github.com/nvm-sh/nvm

#### Windows
https://github.com/coreybutler/nvm-windows

#### Install and use the correct version

```
nvm install 12.20.0
nvm use 12.20.0
```

### Install dependencies

```
npm install
```

### Install npx

```
npm install -g npx
```

## Run the tests

### Run all the tests

```
npx wdio
```

By default this command will run all the tests in Chrome and in the 'dev' environment

### Run a single spec file

```
npx wdio --spec "**/spec-name.spec.js"
```

### Run a single test inside a spec file

```
npx wdio --spec "**/spec-name.spec.js" --mochaOpts.grep "title of the test"
```

### Run tests with a specific tag

Consider some tests with "@Smoke" in the title

```
npx wdio --mochaOpts.grep "@Smoke"
```

### Run all tests except a tag

```
npx wdio --mochaOpts.grep "@Smoke" --mochaOpts.invert
```

### Run all tests with one tag and not another tag

Run tests with tag @foo and not @bar

```
npx wdio --mochaOpts.grep "^(?=.*@foo)(?!.*@bar).*"
```


### Run a suite

```
npx wdio --suite suite-name
```

### Specify the browser

```
npx wdio --capability chrome (or firefox)
```
