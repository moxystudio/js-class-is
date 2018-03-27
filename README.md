# class-is

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]

[npm-url]:https://npmjs.org/package/class-is
[downloads-image]:http://img.shields.io/npm/dm/class-is.svg
[npm-image]:http://img.shields.io/npm/v/class-is.svg
[travis-url]:https://travis-ci.org/moxystudio/js-class-is
[travis-image]:http://img.shields.io/travis/moxystudio/js-class-is/master.svg
[codecov-url]:https://codecov.io/gh/moxystudio/js-class-is
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/js-class-is/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/js-class-is
[david-dm-image]:https://img.shields.io/david/moxystudio/js-class-is.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/js-class-is?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/js-class-is.svg
[greenkeeper-image]:https://badges.greenkeeper.io/moxystudio/js-class-is.svg
[greenkeeper-url]:https://greenkeeper.io/

Enhances a JavaScript class by adding an `is<Class>` property to compare types between realms.

## Motivation

Checking if a value is an instance of a class in JavaScript is not an easy task.

You can use `instanceof`, but that doesn't work between different realms or different versions. Comparing with `constructor.name` could be a solution but if you need to Uglify the module it doesn't work, as it creates different names for the same module.

So the solution is to use symbols.

## Installation

`$ npm install class-is`

If you want to use this module in the browser you have to compile it yourself to your desired target.

## Usage

```js
// Package X
const withIs = require('class-is');

class Person {
    constructor(name, city) {
        this.name = name;
        this.city = city;
    }
}

module.exports = withIs(Person, { className: 'Person', symbolName: '@org/package-x/person' });

// Package Y
const withIs = require('class-is');

class Animal {
    constructor(species) {
        this.species = species;
    }
}

module.exports = withIs(Animal, { className: 'Animal', symbolName: '@org/package-y/animal' });

// Package Z
const Person = require('package-x');
const Animal = require('package-y');

const diogo = new Person('Diogo', 'Porto');
const wolf = new Animal('Gray Wolf');

console.log(Person.isPerson(diogo));
console.log(Person.isPerson(wolf));
```

Running the example above will print:

```
true
false
```

## API

### withIs(Class, { className: name, symbolName: symbol })

###### class

Type: `class`

The class to be enhanced.

###### className

Type: `String`

The name of the class your passing.

###### symbolName

Type: `String`

Unique *id* for the class. This should be namespaced so different classes from different modules do not collide and give false positives.

Example: `@organization/package/class`

## Tests

`$ npm test`   
`$ npm test -- --watch` during development


## License

[MIT](http://www.opensource.org/licenses/mit-license.php)
