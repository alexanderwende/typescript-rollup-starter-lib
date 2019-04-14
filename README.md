# typescript-rollup-starter-lib
A project template for TypeScript libraries.

[![Build Status](https://travis-ci.org/alexanderwende/typescript-rollup-starter-lib.svg?branch=master)](https://travis-ci.org/alexanderwende/typescript-rollup-starter-lib)
[![Coverage Status](https://coveralls.io/repos/github/alexanderwende/typescript-rollup-starter-lib/badge.svg?branch=master)](https://coveralls.io/github/alexanderwende/typescript-rollup-starter-lib?branch=master)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Features

* Unit testing and code coverage with [karma](http://karma-runner.github.io/) and [karma-typescript](https://www.npmjs.com/package/karma-typescript)
* Debug configuration for VSCode to debug unit tests
* Build tree-shakeable es6 and commonjs modules and check bundle size with [rollup](https://rollupjs.org/)
* Generate API documentation with Microsoft's [api-extractor](https://github.com/Microsoft/web-build-tools/tree/master/apps/api-extractor) and [api-documenter](https://github.com/Microsoft/web-build-tools/tree/master/apps/api-documenter) based on [TSDoc](https://github.com/Microsoft/tsdoc) standard
* Use [conventional commit messages](https://conventionalcommits.org/) with [commitizen](https://github.com/commitizen/cz-cli) and [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)
* Automate releases (versioning and CHANGELOG generation) with [standard-version](https://github.com/conventional-changelog/standard-version) using [semver](https://semver.org/)
* Integration with [Travis CI](https://travis-ci.org/) and [Coveralls](https://coveralls.io/)

## Usage

1. Clone the repository  
`git clone git@github.com:alexanderwende/typescript-rollup-starter-lib.git`
2. Rename the project template folder to your project name  
`mv typescript-rollup-starter-lib my-project`
3. Delete the `.git` folder inside the template project  
`cd my-project && rm -rf .git`
4. Initialize a new git repository  
`git init`
5. Add all files to git  
`git add .`
6. Update `package.json`'s `name`, `description`, `author`, `repository`, `homepage` and `bugs` fields with your info
7. Update `README.md`
8. Commit your changes using conventional commit messages  
`git commit -m 'chore: initial setup'`
9. Add your remote and push it  
`git remote add origin https://github.com/my-username/my-project.git`  
`git push -u origin master`

## Travis CI

In order to use Travis CI you need to create a Travis CI account and authorize it with your GitHub account. Follow steps 1 to 3 of the [To get started with Travis CI](https://docs.travis-ci.com/user/tutorial/#to-get-started-with-travis-ci) tutorial. After you have enabled your repository in Travis CI you are all set up. 

You can modify the `.travis.yml` file in your project folder to make changes to the Travis CI build.

## Coveralls

In order to use Coveralls you need to create a Coveralls [account](https://docs.coveralls.io/) and authorize it with your GitHub account. After you have enabled your repository in Coveralls you are all set up.
