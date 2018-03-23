function addIs({ name, symbol }) {
    const symbolFor = Symbol.for(symbol);

    return (Class) => {
        class NewClass extends Class {
            constructor(...args) {
                super(...args);
                Object.defineProperty(this, symbolFor, { value: true });
            }
        }

        NewClass[`is${name}`] = (obj) => obj && Boolean(obj[symbolFor]);

        return NewClass;
    };
}

export default addIs;
