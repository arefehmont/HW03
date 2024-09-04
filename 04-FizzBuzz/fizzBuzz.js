// write your func here

function FizzBuzz() { 
    for (let index = 1; index <101; index++) {
    if (index%3 == 0) {console.log("fizz")}
    else if (index%5 == 0){console.log("buzz")}
    else if (index%5==0 && index%3 == 0 ){console.log("fizzbuzz")} } }

    console.log(FizzBuzz(9))
