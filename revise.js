/*

* pure function:*
Functions as tiny units to be combined and run automatically must be highly predictable.

We rely on using their evaluated result to pass the input to the next unit of code (automatically). Any ‘side effects’ would destroy this.

For demonstration purposes here is an example of a pure function that calculates the price of a product including tax (UK tax is 20%):

example

|   function priceAfterTax(productPrice) {
|       return (productPrice * 0.20) + productPrice;
|   }

It passes both 1, and 2, of the requirements for a function to be declared pure. It doesn’t depend on any external input, it doesn’t mutate any data and it doesn’t have any side effects.

* Impure Function In JavaScript *

|   var tax = 20;
|   function calculateTax(productPrice) {
|       return (productPrice * (tax/100)) + productPrice; 
|    }

If you said it’s because the function depends on an external tax variable you’d be right! A pure function can not depend on outside variables. It fails one of the requirements thus this function is impure.

*/

const multiplyBy2 = (x) => x * 2;
const add3 = (x) => x + 3;
const divideBy5 = (x) => x / 5;
const subtract4 = (x) => x - 4;

const reduce = (array, howToCombine, buildingUp) => {
    for (let i = 0; i < array.length; i++) {
        buildingUp = howToCombine(buildingUp, array[i]);
    }

    return buildingUp;
};

const runFunctionOnInput = (input, fn) => {
    return fn(input);
};

const output = reduce(
    [multiplyBy2, add3, divideBy5, subtract4],
    runFunctionOnInput,
    11
);

console.log(output);