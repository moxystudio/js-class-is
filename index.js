'use strict';

function withIs(Class, { className, symbolName }) {
    const symbol = Symbol.for(symbolName);

    const ClassIsWrapper = {
        /*
            The code below assigns the class wrapper to an object to trick
            JavaScript engines to show the name of the extended class when
            logging an instances.
            We are assigning an anonymous class (class wrapper) to the object
            with key `className` to keep the correct name.
            If this is not supported it falls back to logging `ClassIsWrapper`.
        */
        [className]: class extends Class {
            constructor(...args) {
                super(...args);
                Object.defineProperty(this, symbol, { value: true });
            }

            get [Symbol.toStringTag]() {
                return className;
            }
        },
    }[className];

    ClassIsWrapper[`is${className}`] = (obj) => obj && Object.getPrototypeOf(obj) && Boolean(obj[symbol]);

    return ClassIsWrapper;
}

module.exports = withIs;
