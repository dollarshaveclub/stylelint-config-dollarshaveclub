# THIS REPOSITORY HAS BEEN MERGED INTO [FACE CONFIG](dollarshaveclub/face-config)
You can find the latest version in our [`face-config`](dollarshaveclub/face-config) monorepo, where it will continue to be developed

# stylelint-config-dollarshaveclub

[![Build Status](https://travis-ci.org/dollarshaveclub/stylelint-config-dollarshaveclub.svg?branch=master)](https://travis-ci.org/dollarshaveclub/stylelint-config-dollarshaveclub)
[![Greenkeeper badge](https://badges.greenkeeper.io/dollarshaveclub/stylelint-config-dollarshaveclub.svg)](https://greenkeeper.io/)

This repository contains Dollar Shave Club [Stylelint](https://stylelint.io/) rules.

This project is beta. It will be published soon.

## Installation

```
$ npm install --save-dev stylelint-config-dollarshaveclub
```

## Usage

Once the `stylelint-config-dollarshaveclub` package is installed, used by specifying `dollarshaveclub`.
- This project will soon support scss linting (**Note:** this should be supported out of the box).

For frameworkless JavaScript modules:

```js
{
  "extends": "dollarshaveclub",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## Dependencies

- **[eslint](https://github.com/eslint/eslint/):** ensures JavaScript matches JavaScript guidelines.
- **[eslint-config-dollarshaveclub](https://github.com/dollarshaveclub/eslint-config-dollarshaveclub/):** ensures JavaScript matches DSC guidelines.
- **[globby](https://github.com/sindresorhus/globby):** used for testing all test files in `tests/`.
- **[mocha](https://mochajs.org/):** used for testing.
- **[stylelint](https://github.com/palantir/tslint):** used for linting typescript (`.css, .scss`) files.
- **[sytlelint-config-standard](https://github.com/blakeembrey/tslint-config-standard):** extends `stylelint`.

## License

MIT
