// import { Employee } from '../hr/employee';
// import { Retiree } from '../hr/retiree';
// import { givePromotion } from '../hr/misc';

// import { Employee, Retiree, givePromotion } from '../hr';
import * as fromHR from '../hr';

describe('using classes', () => {
    describe('importing them and stuff', () => {
        it('should behave...', () => {
            const empl = new fromHR.Employee();
            const ret1 = new fromHR.Retiree();

            fromHR.givePromotion(empl);
        });
    });

    describe('creating them', () => {
        it('you can make them just like anything else - and constructors', () => {
            // class Car {
            //     make: string;
            //     model: string;
            //     mileage: number;

            //     // this keyword is NOT optional
            //     constructor(make: string, model: string, mileage: number) {
            //         this.make = make;
            //         this.model = model;
            //         this.mileage = mileage;
            //     }
            // }

            // don't need to list out properties and explicitly set them
            class Car {

                private _primaryDriver: string;
                constructor(public make: string, public model: string, private startingMileage: number) {/* this is usually empty */ }

                get mileage() { return this.startingMileage; }

                get primaryDriver() { return this._primaryDriver; }
                set primaryDriver(newValue: string) { this._primaryDriver = newValue.toUpperCase(); }

                go() {

                }

                stop() {

                }

                fillUp(amount: number) {

                }
            }

            const myCar = new Car('Chevy', 'Bolt', 19_000);

            expect(myCar.make).toBe('Chevy');

            expect(myCar.mileage).toBe(19_000);

            myCar.primaryDriver = 'Jeff';
            expect(myCar.primaryDriver).toBe('JEFF');

            myCar.go();
            myCar.stop();

        });
    });
});
