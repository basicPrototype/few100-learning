describe('functions', () => {
    describe('declaring them', () => {
        it('has about three different ways to do it', () => {
            // 1. named function
            function add(a: number, b: number) {
                return a + b;
            }

            // 2. anonymous function
            const subtract = function (a: number, b: number) {
                return a - b;
            };

            // since this is an expression it returns itself and assigns to the function  or something.
            // 3. 'arrow' function
            const multiply = (a: number, b: number) => a * b;

            expect(add(2, 2)).toBe(4);
            expect(subtract(10, 2)).toBe(8);
            expect(multiply(3, 3)).toBe(9);
        });

        it('details of arrow functions', () => {
            const getMessage = () => 'Howdy!';
            expect(getMessage()).toBe('Howdy!');

            const logIt = (message: string) => {
                console.log(message);
                return 'Logged it';
            };
            expect(logIt('yo')).toBe('Logged it');

        });


    });

    describe('arguments to functions', () => {
        it('does not have overloading', () => {

            function formatName(first: string, last: string, mi?: string) {
                let firstPart = `${last}, ${first}`;
                if (mi) {
                    firstPart += ` ${mi}.`;
                }
                return firstPart;
            }

            expect(formatName('Han', 'Solo')).toBe('Solo, Han');
            expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');
        });
    });

});
