describe('declaring variables', () => {
    it('an example', () => {
        const name = 'bob';
        expect(name).toBe('Bob');
    });

    it('declaring a variable with let', () => {
        let age: number | string;
        // age. intellsense shows only methods on both a number anda  string
        age = 50;

        age = 51;
        // intellisense only shows number options

        age = 'Old';
        // intellisense only shows string options

        age = ['a', 'b'];
        // lint complains because this is neither a string or number
    });

    it('initializing a variable defines (infers) the type', () => {
        let name = 'Bob';

        name = 'Steve';
        name = 'Kara';

        name = 1138; // lint errors because we just changed the type and it started as an inferred string
    });
});
