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

    });

});

describe('various types', () => {
    it('number literals', () => {
        const bigNumber = 123_456_789.23; // can use underscores in place of commas

        const color = 0xFF;  // hex
        const permissions = 0o33; // octal
        const binary = 0b0101010;  // binary
    });
});

describe('array destructuring and tuples', () => {
    it('array destructuring', () => {
        const friends = ['David', 'Sean', 'Amy'];

        // const first = friends[0];
        // const last = friends[2];
        const [first, , last] = friends; // weird but good syntax for the above.  similar syntax now in c# as well.

        expect(first).toBe('David');
        expect(last).toBe('Amy');
    });

    it('using destructuring with rest', () => {
        const todos = ['Clean Garage', 'Fix tire', 'mop Floors'];

        const [next, ...others] = todos; // the rest operator.

        expect(next).toBe('Clean Garage');
        expect(others).toEqual(['Fix tire', 'mop Floors']);
    });

    it('tuples - basic example', () => {
        let stuff: [boolean, number];
        stuff = [true, 140];
    });

    it('type aliases', () => {
        type ThingWithLettersAndJunk = string;
        let name: ThingWithLettersAndJunk;

        type ArtistNameAndAge = [string, string, number];
        let warren: ArtistNameAndAge;

        warren = ['Warren', 'Ellis', 53];
    });

    it('an oop example', () => {
        // return type is string
        // function formatName(first: string, last: string): string {
        //     return `${last}, ${first}`;
        // }

        interface NameResult { fullName: string; length: number; }
        function formatName(first: string, last: string): NameResult {
            const fullName = `${last}, ${first}`;
            return {
                fullName,
                length: fullName.length
            };
        }

        // const answer = formatName('Han', 'Solo');
        // expect(answer.fullName).toBe('Solo, Han');
        // expect(answer.length).toBe(9);

        const { fullName, length: john } = formatName('Han', 'Solo');
        expect(fullName).toBe('Solo, Han');
        expect(john).toBe(9);

    });

    it('a tuple example of the above', () => {
        type NameResult = [string, number];

        function formatName(first: string, last: string): NameResult {
            const fn = `${last}, ${first}`;
            return [fn, fn.length];
        }

        const [fullName, length] = formatName('Luke', 'Skywalker');
        expect(fullName).toBe('Skywalker, Luke');
        expect(length).toBe(15);
    });
});

describe('enums and union constants', () => {
    enum SeatType { window, aisle, middle }  // 0, 1, 2

    function getSeatForTicket(ticketNumber: number): SeatType {
        if (ticketNumber % 2 === 0) {
            return SeatType.window;
        } else {
            return SeatType.aisle;
        }

    }

    it('using enums', () => {
        const getMySeat = getSeatForTicket(108);
        let cost = 0;
        switch (getMySeat) {
            case SeatType.window: {
                cost = 100;
                break;
            }
            case SeatType.aisle: {
                cost = 150;
                break;
            }
            case SeatType.middle: {
                cost = 50;
                break;
            }
        }

    });
});

describe('fun with bools', () => {

    it('a truth table', () => {
        expect(true).toBeTruthy();
        expect(false).toBeFalsy();
        expect('').toBeFalsy();
        expect(' ').toBeTruthy();
        expect(undefined).toBeFalsy();
        expect(null).toBeFalsy();
        expect(0).toBeFalsy();
        expect(-1).toBeTruthy();
        // this means if you use one of these as a predicate in an if statement, you will get either true or false.
        // e.g.
        if ('tacos') {
            // it is true!
        }
    });
});
