/*-----Task 1: The function determines if a person is old enough to legally drink. It takes the
argument "age" and returns either true or false-----*/

function isOldEnoughToDrink(age){

    if (age >= 18){
        return "true";
    }else {
        return "false";
    }
}

let output1 = isOldEnoughToDrink(22)

console.log(output1)


/*-----Task 2: The function determines if a person of this given age is old enough to legally drink and drive in the United States. 
It takes the argument "age" and returns either true or false-----*/

function isOldEnoughToDrinkAndDrive(age){
    
    //the condition below checks whether the age satisfies the two conditions. If the condition is met it returns false
    //because it is illegal to drive and drink.
    if (age >= 16 && age >= 21){
        return "false";
    }else {
        return "false";
    }
}

let output2 = isOldEnoughToDrinkAndDrive(21)

console.log(output2)

/*-----Task 3: The function takes a key and object as an argument and returns the corresponding value of the key provided in the given object-----*/

function getProperty(obj,key){
    if (obj[key]){
        return obj[key];
    } else {
        return undefined;
    }
}

var obj = {
    key: 'value'
};

var output3 = getProperty(obj, 'key');
console.log(output3); // --> 'value'

/*-----Task 4: The function adds a property to an object given a key and object as an argument-----*/

function addProperty(obj, key){
    obj[key] = '';
}

var myObj = {};

addProperty(myObj, 'myProperty');

console.log(myObj.myProperty); // --> true


/*-----Task 5: The function determines if a person of this given age is old enough to legally drink and drive in Nigeria. 
It takes an object as argument-----*/

function isPersonOldEnoughToDrinkAndDrive(obj){
    
    //the condition below checks whether the age satisfies the condition. If the condition is met it returns false
    //because it is illegal to drive and drink in Nigeria
    if (obj.age >= 18){
        return "false";
    }else {
        return "false";
    }
}

var obj = {
    age: 45
};

var output5 = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output5); // --> false


/*-----Task 6: The function returns the average of the length of two words passed in as argument.-----*/

function computeAverageLengthOfWords(word1, word2){
    return (word1.length + word2.length)/2;
}

var output6 = computeAverageLengthOfWords('code', 'programs');
console.log(output6); // --> 6


/*-----Task 7: The function takes in an array, and returns an object with:
1) the first element of the array as the object's key, and 2) the last element of the array as that key's value.
-----*/

function transformFirstAndLast(arr){

    let obj = {};
    obj[arr[0]] = arr[arr.length - 1];
    return obj
}

var input = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
var output7 = transformFirstAndLast(input);

console.log(output7)

/*-----Task 8: The function takes in an object, and which returns an array of all the input object's keys. -----*/

function getAllKeys(obj){
    return Object.keys(obj)
}

var input1 = {
    name : 'Sam',
    age : 25,
} 

var output8 = getAllKeys(input1);

console.log(output8)