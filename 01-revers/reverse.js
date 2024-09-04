
// use methods

function reverseString(str) {
    let splitString = str.split(""); 
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
 return joinArray;
}

// use for Loop

function reverseString(str) {
    let RevString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        RevString += str[i];
    }
    return RevString;
}
const test = reverseString('Test For reverseString')
console.log(test);