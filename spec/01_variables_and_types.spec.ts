describe('declaring variables', () => {
    it('an example', () => {
        const name = 'Bob';
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

        // add any so it doesn't complain.  tslint won't allow functions without type declaration.
        function add(a: any, b: any) {
            return a + b;
        }
    });

    it('initializing a variable defines (infers) the type', () => {
        let name = 'Bob';

        name = 'Steve';
        name = 'Kara';

        name = 1138; // lint errors because we just changed the type and it started as an inferred string
    });

    describe('a bit about strings', () => {
        it('can e delimited with single or double', () => {
            const name = 'Bob'; // typed as double quote; tslint changed to single
            // tslint:disable-next-line: quotemark
            expect(name).toBe("Bob");
        });
        it('string literals - interpreted (using backticks)', () => {
            const name = `Bob`;
            expect(name).toBe('Bob');

            const story = `some
            multi
            line
            thing`;

            const age = 27;

            // string interpolation
            const message = 'The name is ' + name + ' and the age is ' + age + '.';
            const message2 = `The name is ${name} and the age is ${age}.`;
            expect(message).toBe(message2);

            const newElement = `<div>
            <h2>${name}</h2>
            <h2>${age}</h2>
            </div>`;
        });

        it('const - be careful', () => {
            // const doesn't allow you to assign a new value to that *variable*
            // but it does allow you to assign to an object assigned to that variable

            const x = 12;
            // x=14; //doesn't allow this

            const favoriteNumbers = [2, 4, 9, 20];
            favoriteNumbers[2] = 10; // this is *allowed*
            console.log(favoriteNumbers);
            expect(favoriteNumbers[2]).toBe(10);

            const movie = {
                title: 'Rise of Skywalker',
                yearReleased: 2020
            };

            movie.yearReleased = 2019; // this is *allowed*
            expect(movie.yearReleased).toBe(2019);

            // using inerfaces
            interface Movie {
                title: string;
                yearReleased?: number; // ? makes this parameter optional
            }

            const film1: Movie = {
                title: '2001'
            };

            const film2: Movie = {
                title: '2010',
                yearReleased: 1999
            };

        };
    });
});

})
