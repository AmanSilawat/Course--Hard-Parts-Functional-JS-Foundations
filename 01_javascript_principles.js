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



const reduce = (array, howToCombine, bulidingUp) => {
	for (var i = 0; i < array.length; i++) {
		bulidingUp = howToCombine(bulidingUp, array[i])
		return bulidingUp;
	}
}

const add= (a, b) => a + b;
const summed = reduce( [1, 2, 3], add, 0 )



/*
--------------------
js top three best features
1. prototypal nature => array.push() -> doesn't find this in array object it doesn't give up then loop up the __proto__ hidden property


