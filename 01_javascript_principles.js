const num = 3;   //sotre in global memory

//line 4 is declareing a function but not invoke
const multiplyBy2 = (inputNumber) => { //inputNumber and result are local variable
	const result = inputNumber * 2;
	return result; //after return the value: this hole function and local storage have also been removed
}
const name = "will"; // name variable store in global memory

//two stuff in js
// 1st stuff is save to the memory
// 2st processing power, execute code line-by-line

const output = multiplyBy2(num) 
// at this time right side is unfinished
// right side method and invoke that.
// assing is return output is store in output variable






// ----------------------------------------
/*
function is first class object  ***

	* function treated like a object
		=> assinged variable and properties of other objects
		=> passed as arguments into funtions
		=> return as value from functions



higher ourder function-----
=> function mai function ko pass kr callback called a higher order function 

- easier to add features
	=> add()
	=> divide()
	=> multiply()

- more readable
	better function, variable Naming

- Easier to debug
	=> understanding under-the-hood





Use higher order function to multiplyBy2

  [   1,     2,         3   ]
      |      |          |
      |      |          |
	  ▼      ▼          ▼
[] → [1] → [1, 2] → [1, 2, 3]      ◄-- they called it "accumulator"




*/



const reduce = (array, howToCombine, buildingUp) => {
	for (var i = 0; i < array.length; i++) {
		buildingUp = howToCombine(buildingUp, array[i])
		return buildingUp;
	}
}

const add= (a, b) => a + b;
const summed = reduce( [1, 2, 3], add, 0 )



/*
--------------------
js top three best features
1. prototypal nature => array.push() -> doesn't find this in array object it doesn't give up then loop up the __proto__ hidden property
2. ?
3. ?



--------------------
reduce, filter and chaining higher ourder function
=> function mai function ko pass kr callback called a higher order function 

- easier to add features
	=> filter()
	=> reduce()
	=> map()

- more readable
	better human redable naming of functions and variables
	array.filter(greaterThan2).reduce(add,0) 

- Easier to debug
	=> understanding under-the-hood
*/



// custom code redue -----
const reduce = (array, howToCombine, buildingUp) => {
 for (let i = 0; i < array.length; i++){
 buildingUp = howToCombine(buildingUp, array[i])
 }
 return buildingUp
}
const add = (a, b) => a + b
const summed = reduce([1,2,3], add, 0)



// Build in redue method -----
const add = (a, b) => a + b
const summed = [1,2,3].reduce(add, 0) // summed is 6




// Function composition -------
// Reduce as the most VERSATILE function in programming -----
const multiplyBy2 = x => x*2;
const add3 = x => x+3;
const divideBy5 = x => x/5;

const reduce = (array, howToCombine, buildingUp) => {
 for (let i = 0; i < array.length; i++){
 buildingUp = howToCombine(buildingUp, array[i])
 }
 return buildingUp
}

const runFunctionOnInput = (input, fn) => {  //VERSATILE FUNCTION 
	return fn(input);
}
const output = reduce([multiplyBy2, add3, divideBy5], runFunctionOnInput, 11)



/* monads, partial application, carrying
Function composition
— Easier to add features
	=> This is the essential aspect of functional javascript - being able to list of our units of code by name and have them run one by one as independent, self-contained pieces 

— More readable
	=> reduce here is often wrapped in compose to say ‘combine up’ the functions to run our data through them one by one. The style is ‘point free’

— Easier to debug
	=> I know exactly the line of code my bug is in - it’s got a label!