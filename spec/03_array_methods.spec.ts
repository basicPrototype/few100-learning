import { isEven, IHaveAMessage } from './utils';

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
        it('map', () => {

            // LINQ: select
            const doubled = numbers.map(n => n + n);
            expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
        });

        it('has a filter', () => {
            // LINQ: where
            const evens = numbers.filter(isEven);
            expect(evens).toEqual([2, 4, 6, 8]);
        });
    });
});

describe('two types of loops that may or may not be', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
        // for (const prop in book) {
        //     console.log(`Book's ${prop} is ${book[prop]}`);
        // }
    });

    // useful in angular templates
    // does what a c# programmer would expect for-in loop to do.
    it('for of loop', () => {
        let total = 0;
        for (const n of numbers) {
            total += n;
        }
        expect(total).toBe(45);

    });

    it('using reduce', () => {
        let total = numbers.reduce((s, n) => s + n);
        expect(total).toBe(45);
        total = numbers.reduce((s, n) => s + n, 100);
        expect(total).toBe(145);
    });
});

// shopping cart.  want to know total price and shipping price
describe('an example', () => {
    it('the example', () => {
        interface CartItem {
            description: string;
            qty: number;
            price: number;
        }

        const cart: CartItem[] = [
            { description: 'Eggs', qty: 3, price: 2.37 },
            { description: 'Bread', qty: 2, price: 3.50 },
            { description: 'Beer', qty: 6, price: 7.50 },
        ];

        // now figure out the total quantity and price in the cart
        interface ShippingInfo {
            totalQty: number;
            totalPrice: number;
        }

        const starter: ShippingInfo = {
            totalQty: 0,
            totalPrice: 0
        };
        // first parameter determines the return type
        // created starter so the initial item is a quantity and not a cart item
        const result = cart.reduce((s: ShippingInfo, n: CartItem) => {
            return {
                totalQty: s.totalQty += n.qty,
                totalPrice: s.totalPrice += n.price
            };
        }, starter);

        expect(result.totalQty).toBe(11);
        expect(result.totalPrice).toBeCloseTo(13.37, 2);

        // mystery - test thinks roundedPrice is a string
        // const roundedPrice: number = result.totalPrice.toFixed(2);
        // expect(roundedPrice).toEqual(13.37);


    });
});

describe('structural typing', () => {
    it('an example', () => {
        function logIt(thingy: IHaveAMessage): void {
            console.log(thingy.message + ' from: ' + thingy.from);
        }

        const call = {
            from: 'mom',
            message: 'call me',
            time: '4:20 PM'
        };

        // only logs message
        logIt(call);

    });
});


