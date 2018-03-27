'use strict';

const withIs = require('..');

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
