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




======== Closer =========== */
const functionCreator = () => {
	let counter = 0;

	const add3 = (num => {
		const result = num+3;
		return result;
	});
	return add3;  //return function defination into generatedFunc
	// after return delete execution context and remove call stack "generatedFunc"
	// callstack backout to global
}
const generatedFunc = functionCreator(); //add to call stack
// add3 method is inside of the generatedFunc

const result = generatedFunc(2); //add to call stack : and call add3


/*
=> heap it's not global memory
=> array, object, functin ever declared, they're all stored in heap memory

Heap : 
				'add3'
	=> 10012 : -►[f]-►


dominates :- 
asyncronous
persistence of statues around asyncronous callbacks
dominates iterators
generators - behind the seen
async - behind the seen
dominates event loop

*/




//Example: witout closer
const outer = () => {
	let counter = 0;
	const incrementCounter = () => {
		counter++;
	}
	incrementCounter();
}

outer();



//Example: with closer
const outer = () => { //declaring a function name outer
	let counter = 0;
	const incrementCounter = () => {
		counter++;
	}
	return incrementCounter();
	// after return this execution context is garbage collected
}

const newFunction = outer(); //

/*
=== store data in function two type ===
temporary: local variable enviroment
permanent: persistence, hidden property [[__proto__]]



backpack:
	=> P. L. S. R. D.
	=> Persistent Lexical Scope Reference Data

	=> C. O. V. E.
	=> Closed Over Variable Enviroment

	=> Backpack

	=> Closer
*/





// Function Decoration =========================
const oncify = (convertMe) => {
	let counter = 0;
	const inner = (input) => {
		if (counter === 0) {
			const output = convertMe(input);
						  //multiplyBy2( 10 )     :multiplyBy2 stored into backpack
			return output;
		}
		return "Sorry";
	}
	return inner;
}
const multiplyBy2 = num => num*2;

const oncifiedMultiplyBy2 = oncify(multiplyBy2);

//invoking a function with attech a backpack this type is calld backpack
oncifiedMultiplyBy2(10); //20 //inner function: backpack
oncifiedMultiplyBy2(7); //Sorry //inner function: backpack



/*
Function decoration
	— Easier to add features
		=> We can ’pseudo’(appear) edit our functions that we’ve already made - into functions that behave similar but with bonus features!

	— Easier to debug
		=> Definitely need to know how it’s working under the hood!


