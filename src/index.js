function addIs(name) {
    return (Class) => {
        const symbol = Symbol.for(`add-is/${name}`);

        class NewClass extends Class {
            constructor(...args) {
                super(...args);
                this[symbol] = true;
            }
        }

        NewClass[`is${name}`] = (obj) => obj && Boolean(obj[symbol]);

        return NewClass;
    };
}

export default addIs;
