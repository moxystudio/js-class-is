function withIs(Class, { className, symbolName }) {
    const symbol = Symbol.for(symbolName);

    class NewClass extends Class {
        constructor(...args) {
            super(...args);
            Object.defineProperty(this, symbol, { value: true, enumerable: false });
        }
    }

    NewClass[`is${className}`] = (obj) => obj && Boolean(obj[symbol]);

    return NewClass;
}

export default withIs;
