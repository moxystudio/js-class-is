# is-class-decorator

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]

[npm-url]:https://npmjs.org/package/is-class-decorator
[downloads-image]:http://img.shields.io/npm/dm/is-class-decorator.svg
[npm-image]:http://img.shields.io/npm/v/is-class-decorator.svg
[travis-url]:https://travis-ci.org/moxystudio/js-is-class-decorator
[travis-image]:http://img.shields.io/travis/moxystudio/js-is-class-decorator/master.svg
[codecov-url]:https://codecov.io/gh/moxystudio/js-is-class-decorator
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/js-is-class-decorator/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/js-is-class-decorator
[david-dm-image]:https://img.shields.io/david/moxystudio/js-is-class-decorator.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/js-is-class-decorator?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/js-is-class-decorator.svg
[greenkeeper-image]:https://badges.greenkeeper.io/moxystudio/js-is-class-decorator.svg
[greenkeeper-url]:https://greenkeeper.io/

Enhances a JavaScript class by adding an `is<Class>` property to compare types between realms.

## Motivation

Checking if a value is an instance of a class in JavaScript is not an easy task.

You can use `instanceof`, but that doesn't work between different realms or different versions. Comparing with `constructor.name` could be a solution but if you need to Uglify the module it doesn't work, as it creates different names for the same module.

So the solution is to use symbols.

## Installation

`$ npm install is-class-decorator`


## Usage

```js
import addIs from 'is-class-decorator';

class Person {
    constructor(name, city) {
        this.name = name;
        this.city = city;
    }
}

class Animal {
    constructor(species) {
        this.species = species;
    }
}

const PersonWithType = addIs('Person')(Person);
const AnimalWithType = addIs('Animal')(Animal);

const diogo = new PersonWithType('Diogo', 'Porto');
const wolf = new AnimalWithType('Wolf');

console.log(PersonWithType.isPerson(diogo));
console.log(PersonWithType.isPerson(wolf));
```

Running the example above will print:

```
true
false
```

## Tests

`$ npm test`   
`$ npm test -- --watch` during development


## License

[MIT](http://www.opensource.org/licenses/mit-license.php)
