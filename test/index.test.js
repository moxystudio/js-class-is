import withIs from '../src';

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

const PersonWithType = withIs(Person, { className: 'Person', symbolName: '@org/package-x/person' });
const AnimalWithType = withIs(Animal, { className: 'Animal', symbolName: '@org/package-y/animal' });

const diogo = new PersonWithType('Diogo', 'Porto');
const wolf = new AnimalWithType('Wolf');

test('person is an instance of Person class', () => {
    expect(PersonWithType.isPerson(diogo)).toBe(true);
});

test('wolf is not an instance of Person class', () => {
    expect(PersonWithType.isPerson(wolf)).toBe(false);
});
