import { isEven } from './utils';

describe('array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('checking membership of an array', () => {
        const allEvens = numbers.every(isEven);
        expect(allEvens).toBe(false);

        const someEven = numbers.some(isEven);
        expect(someEven).toBe(true);

    });

    it('visiting every member of an array', () => {
        // less than optimal example (reduce is better for this stuff)
        let total = 0;
        numbers.forEach(n => total += n);
        expect(total).toBe(45);
    });

    describe('array methods that create new arrays', () => {
        it('should behave...', () => {

            const doubled = numbers.map(n => n + n);
            expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
        });
    });
});

describe('two types of loops that may or may not be', () => {
    it('for in loop', () => {
        // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        // let total = 0;
        // for (const num in numbers) {
        //     total += num;
        // }

        // expect(total).toBe(45);
        const book = {
            title: 'Hyperobjects',
            author: 'Morton'
        };

        // for-in loop enumerates the properties of an object
        for (const prop in book) {
            console.log(`Book's ${prop} is ${book[prop]}`);
        }
    });

    // useful in angular templates
    // does what a c# programmer would expect for-in loop to do.
    it('for of loop', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let total = 0;
        for (const n of numbers) {
            total += n;
        }
        expect(total).toBe(45);

    });
});
