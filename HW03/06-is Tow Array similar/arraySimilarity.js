
// this time with arrow func , for

const compareArrays = (a, b) => {
    if (a.length !== b.length) return false;
    else {
      for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    }
  };
  
  let arrayTest1 = [21, null, 33];
  let arrayTest2 = [21, 22, 23];
  let arrayTest3 = [21, undefined, 33];

  
  console.log(compareArrays(arrayTest1, arrayTest2)); 
  console.log(compareArrays(arrayTest1, arrayTest3)); 
  console.log(compareArrays(arrayTest2, arrayTest1));