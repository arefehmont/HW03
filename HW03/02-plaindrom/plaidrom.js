// write your func here


function reverseString(str) {
    let splitString = str.split(""); 
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
 return joinArray;
}

function plaindrom(str) {
    let reverceString = str.split("").reverse().join(""); 
    if(str===reverceString){
        return true
    } else {
        return false
    }
}
console.log( plaindrom("Test"))