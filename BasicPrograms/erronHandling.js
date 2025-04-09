/*try {
    let a = b; // ReferenceError
  } catch (error) {
    console.log(error.name);    // ReferenceError
    console.log(error.message); // b is not defined
    //console.log(error.stack);   // Stack trace
  }
  console.log('My program is Unstoppable');*/

  function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
  
  try {
    console.log(divide(5, 0));
  } catch (error) {
    console.error(error.message); // Division by zero is not allowed.
  }


  
  function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works")



try {
  throw new Error();
  console.log('Hello');
} catch(err) {
  console.log('Goodbye');
}