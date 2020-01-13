

export function add(a: number, b: number) {
    return a + b;
}

//can't be used outside of this module because it's not exported
function subtract(a: number, b: number) {
    return a - b;
}