'use strict';

const withIs = require('..');

/* ==================================================================
   ES6 tests
   ================================================================== */

describe('ES6', () => {
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

    const PersonWithIs = withIs(Person, { className: 'Person', symbolName: '@org/package-x/person' });
    const AnimalWithIs = withIs(Animal, { className: 'Animal', symbolName: '@org/package-y/animal' });

    const diogo = new PersonWithIs('Diogo', 'Porto');
    const wolf = new AnimalWithIs('Wolf');

    test('person is an instance of Person class', () => {
        expect(PersonWithIs.isPerson(diogo)).toBe(true);
    });

    test('wolf is not an instance of Person class', () => {
        expect(PersonWithIs.isPerson(wolf)).toBe(false);
    });

    test('check custom tag of Person class', () => {
        expect(Object.prototype.toString.call(diogo)).toBe('[object Person]');
    });
});

/* ==================================================================
   ES5 and below tests
   ================================================================== */

describe('ES5 and below', () => {
    const Circle = withIs.proto(function () {
        if (!(this instanceof Circle)) { // eslint-disable-line no-invalid-this
            return new Circle();
        }
    }, { className: 'Circle', symbolName: '@org/package/cirlce' });

    const circle = Circle(); // eslint-disable-line new-cap

    const Square = withIs.proto(function () {
        if (!(this instanceof Square)) { // eslint-disable-line no-invalid-this
            return new Square();
        }
    }, { className: 'Square', symbolName: '@org/package/square' });

    const square = new Square();

    test('circle is an instance of Circle class', () => {
        expect(Circle.isCircle(circle)).toBe(true);
    });

    test('square is an instance of Square class', () => {
        expect(Square.isSquare(square)).toBe(true);
    });

    test('check custom tag of Square class', () => {
        expect(Object.prototype.toString.call(square)).toBe('[object Square]');
    });
});
