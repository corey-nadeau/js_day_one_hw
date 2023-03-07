// basics of javascript

/*
    hey mom, look at my multiline comment!
    lets put it on the fridge
    primitive data types in Js: strings ints booleans floats arrrays objects(very similar to python dicts)
    functions in js
    loops
    scripting vs programming lang
*/ 

// string variables

var first_name = 'Zach'

// display the value in js
console.log(first_name)

// assign an int
var some_number = 32;
console.log(some_number)

// show all attributes of a doc or id
console.dir(document)

// float variable
var some_float = 3.141592
console.log(some_float)

// array
var some_array = [1,2,3,4]
console.log(some_array)

var some_object = {'Yee':'Haw'}
console.log(some_object)

// js hoisting (bad practice)(doing things our of order)

a_num = 10
console.log(a_num)
var a_num
console.log(a_num)

console.log(some_random_variable) // still runs but returns undefined
var some_random_variable = 'This is a random variable'
console.log(some_random_variable)

// a better way of declaring a variable is by using 'let' or 'const' keywords

let x = 5
console.log(x)
x = 3
console.log(x)

const y = 5;
console.log(y)
// y = 6
// console.log(y)    commented out because they give compiler warnings




// basic math operations

// addition
let sum = 5 + 5
console.log(sum)

// subtract
let diff = 5 - 4

let diff_1 = 5
let diff_2 = 4
console.log(diff_1 - diff_2)

// mulitplication and divistion same as python

// some other math operations
//finding the floor of a decimal
let find_floor = Math.floor(5.8)
console.log(find_floor)
// alternatively Math.ceil(n) brings back the ceiling

// mind bender
let crazy_stuff = some_float + '4'
console.log(crazy_stuff)

// mind bender 2
let crazy_stuff_2 = some_float + parseFloat('4')
console.log(crazy_stuff_2)

//redeclaration of variables
var red_ranger = 'Jason'
var red_ranger = 'tommy'
console.log(red_ranger)

//using the let keyword for same
let nba_goat = 'michael jordan'
console.log(nba_goat)

nba_goat = 'kobe'
console.log(nba_goat)

// dont retype 'let' on later var changes

//regular named functions






function addNums() {
    let num1 = 4;
    let num2 = 5;
    return num1 + num2
}
console.log(addNums())


let addNum2 = function(num, num2){
    return num + num2
}

console.log(addNum2(6,7))

// es6+ arrow function in js
// our first example shows how to use a single peramiter in an arrow funcion without paretheses
//this can only be done with one parameter if you dont want to use parenthese

let cubed = num => {
    return num**3
}

let someFunc = () => {
    return 5
}
console.log(someFunc())

console.log(cubed(4))

// with parenthesis
let cubed2 = (num) => {
    return num**3
}
console.log(cubed(4))

// if you have mulitploe perameters you must have parentheses around them
let toThePower = (num, power) => {
    return num ** power
}

console.log(toThePower(4,3))


console.log((function(name){
    let hello = "Hello " + name;
    return hello
})('Joel'))



// control flow
// if statements
function determineAge(age){
    if (age < 18){
        return 'Minor'
    } else if (age >= 18 && age < 65) {
        return 'Adult'
    } else {
        return 'Senior'
    }
}

console.log(determineAge(33))

// ternary operators
function determineAge2(age){
    return (age < 18) ? 'minor' : (age >= 18 && age <= 65) ? 'Adult not retired' : 'Elderly person not retired'
}

console.log(determineAge2(33))

// loops
function countByOne(){
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
    return 'Counting has stopped'
}

console.log(countByOne())






function decreaseByOne(){
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
    return 'Counting has stopped'
}

console.log(decreaseByOne())

function count_with_while(){
    let i = 0;
    let text = '';
    while(i < 10){
        text += `this number is... ${i} \n`;
        i++;
    };
    return text;
}
console.log(count_with_while())

// do while loop
function countWithDoWhile(){
    let i = 0;
    let text = '';

    do {
        text += `this number is... ${i} \n`;
        i++;
    }

    while (i < 10)
    return text
}

// do while will run at least one time

console.log(countWithDoWhile())

// create an array
let group_of_names = ['jerry','ben','bash','Brock','misty']

// indext the first position
console.log(group_of_names[0])

let terry, ben, misty;
[terry, misty, ben] = group_of_names
console.log(terry,ben,misty)



// method 1 for looping through an array
function showAllNames(){
    for(let i = 0; i < group_of_names.length; i++){
        console.log(group_of_names[i])
    }
    return 'done'
}

console.log(showAllNames())

// method 2
console.log(group_of_names.forEach(element => console.log(element)))

// js array method array.toString()
console.log(group_of_names.toString())
console.log(typeof(group_of_names.toString()))

//more methods map, filter, reduce

//.map
let b_names = group_of_names.map( i => {
    if (i[0] == 'B'){
        return i
    } else {
        return false
    }
})

console.log(b_names)

// long form of .map
let b_names_test = function () {
    let test_array = [];
    for(let i = 0; i < group_of_names.length; i++){
        if(group_of_names[i][0] == 'B'){
            test_array.push(group_of_names[i])
        }
    }
    return test_array
}

console.log(b_names_test())

// .filter()

let long_names = group_of_names.filter( element => element.length > 4)
console.log(long_names)

// .reduce()

const nums = [2,4,6,8,10]

let nums_reduced = nums.reduce((accumulator, current_num) => {
    return accumulator + current_num
})
console.log(nums_reduced)

// you can alos use methods like .join .slice, .search, .splice