# Current RMS API Module

[![Build Status](https://jenkins.tomgiddings.co.uk/buildStatus/icon?job=current-rms&subject=Tests)](https://jenkins.tomgiddings.co.uk/job/current-rms/)

This module allows your Node app to query the Current RMS API. Please feel free to join in the development of this module!


## Installation

This package is on npm, so can be installed using:

```javascript
npm i current-rms
```

## Usage

You'll need a Current RMS account and API key to use this module. Usage is as follows:

```javascript
var current = require('current-rms')(CURRENT_SUBDOMAIN, CURRENT_KEY) 
```

## Available Methods
Documentation for the API can be found here:

https://api.current-rms.com/doc

I'm slowly getting through the methods. Please feel free to contribute with a PR if you need any that are missing in the meantime.

## Tests
Tests use Mocha and Chai, and can be run with *npm test*.
