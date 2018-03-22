import addIs from '../src';

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

test('person is an instance of Person class', () => {
    expect(PersonWithType.isPerson(diogo)).toBe(true);
});

test('wolf is not an instance of Person class', () => {
    expect(PersonWithType.isPerson(wolf)).toBe(false);
});
