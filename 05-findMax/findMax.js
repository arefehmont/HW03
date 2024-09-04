// write your func here


const TestArr = [3, 1 , 12369.5 , 4, 1, 5, 9, 2, 6, 5, 3 , 412];

let max = TestArr[0];
for (let i = 1; i < TestArr.length; i++) {
  if (TestArr[i] > max) {
    max = TestArr[i];
  }
}
console.log(max); 