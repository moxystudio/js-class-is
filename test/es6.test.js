'use strict';

const withIs = require('..');

const Person = withIs(class {
    constructor(name, city) {
        this.name = name;
        this.city = city;
    }
}, { className: 'Person', symbolName: '@org/package-x/person' });

const Animal = withIs(class {
    constructor(species) {
        this.species = species;
    }
}, { className: 'Animal', symbolName: '@org/package-y/person' });

const diogo = new Person('Diogo', 'Porto');
const wolf = new Animal('Wolf');

test('person is an instance of Person class', () => {
    expect(Person.isPerson(diogo)).toBe(true);
});

test('wolf is not an instance of Person class', () => {
    expect(Person.isPerson(wolf)).toBe(false);
});

test('wolf is an instance of Animal class', () => {
    expect(Animal.isAnimal(wolf)).toBe(true);
});

test('person is not an instance of Animal class', () => {
    expect(Animal.isAnimal(diogo)).toBe(false);
});

test('undefined/null is not an instance of any class', () => {
    expect(Person.isPerson(undefined)).toBe(false);
    expect(Person.isPerson(null)).toBe(false);
});

test('check custom tag of class', () => {
    expect(Object.prototype.toString.call(diogo)).toBe('[object Person]');
    expect(Object.prototype.toString.call(wolf)).toBe('[object Animal]');
});
