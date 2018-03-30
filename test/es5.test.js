'use strict';

const withIs = require('..');

const Circle = withIs.proto(function () {
    if (!(this instanceof Circle)) { // eslint-disable-line no-invalid-this
        return new Circle();
    }
}, { className: 'Circle', symbolName: '@org/package/circle' });

const Square = withIs.proto(function () {
    if (!(this instanceof Square)) { // eslint-disable-line no-invalid-this
        return new Square();
    }
}, { className: 'Square', symbolName: '@org/package/square' });

const circle = new Circle();
const square = new Square();

test('circle is an instance of Circle class', () => {
    expect(Circle.isCircle(circle)).toBe(true);
});

test('square is not an instance of Circle class', () => {
    expect(Circle.isCircle(square)).toBe(false);
});

test('square is an instance of Square class', () => {
    expect(Square.isSquare(square)).toBe(true);
});

test('circle is not an instance of Square class', () => {
    expect(Square.isSquare(circle)).toBe(false);
});

test('calling without new', () => {
    const circle = Circle(); // eslint-disable-line new-cap

    expect(Circle.isCircle(circle)).toBe(true);
});

test('undefined/null is not an instance of any class', () => {
    expect(Circle.isCircle(undefined)).toBe(false);
    expect(Circle.isCircle(null)).toBe(false);
});

test('check custom tag of Square class', () => {
    expect(Object.prototype.toString.call(square)).toBe('[object Square]');
});
