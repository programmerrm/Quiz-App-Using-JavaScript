export const questions = [
    {
        question: "What is JavaScript?",
        answers: [
            { text: "A programming language", correct: true },
            { text: "A markup language", correct: false },
            { text: "A database system", correct: false },
            { text: "A design tool", correct: false },
        ],
    },
    {
        question: "Which company developed JavaScript?",
        answers: [
            { text: "Netscape", correct: true },
            { text: "Microsoft", correct: false },
            { text: "Google", correct: false },
            { text: "Apple", correct: false },
        ],
    },
    {
        question: "What is the correct syntax to output 'Hello World' in JavaScript?",
        answers: [
            { text: "print('Hello World');", correct: false },
            { text: "console.log('Hello World');", correct: true },
            { text: "document.write('Hello World');", correct: false },
            { text: "echo 'Hello World';", correct: false },
        ],
    },
    {
        question: "How do you declare a variable in JavaScript?",
        answers: [
            { text: "var myVar;", correct: true },
            { text: "variable myVar;", correct: false },
            { text: "v myVar;", correct: false },
            { text: "declare myVar;", correct: false },
        ],
    },
    {
        question: "Which of the following is a JavaScript data type?",
        answers: [
            { text: "String", correct: true },
            { text: "Float", correct: false },
            { text: "Double", correct: false },
            { text: "Character", correct: false },
        ],
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            { text: "function myFunction() {}", correct: true },
            { text: "create myFunction() {}", correct: false },
            { text: "def myFunction() {}", correct: false },
            { text: "function: myFunction() {}", correct: false },
        ],
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        answers: [
            { text: "Refers to the current object", correct: true },
            { text: "Refers to a global variable", correct: false },
            { text: "Refers to a specific function", correct: false },
            { text: "Refers to the parent function", correct: false },
        ],
    },
    {
        question: "How do you add a comment in JavaScript?",
        answers: [
            { text: "// This is a comment", correct: true },
            { text: "# This is a comment", correct: false },
            { text: "<!-- This is a comment -->", correct: false },
            { text: "; This is a comment", correct: false },
        ],
    },
    {
        question: "Which method is used to parse a JSON string into a JavaScript object?",
        answers: [
            { text: "JSON.parse()", correct: true },
            { text: "JSON.stringify()", correct: false },
            { text: "JSON.convert()", correct: false },
            { text: "JSON.decode()", correct: false },
        ],
    },
    {
        question: "What is a closure in JavaScript?",
        answers: [
            { text: "A function with access to its own scope, the outer function's scope, and the global scope", correct: true },
            { text: "A variable that can be accessed from multiple functions", correct: false },
            { text: "A method that returns an object", correct: false },
            { text: "An object containing multiple methods", correct: false },
        ],
    },
    {
        question: "How do you check if a variable is an array in JavaScript?",
        answers: [
            { text: "Array.isArray(variable)", correct: true },
            { text: "variable.isArray()", correct: false },
            { text: "typeof variable === 'array'", correct: false },
            { text: "variable instanceof Array", correct: false },
        ],
    },
    {
        question: "What does 'NaN' stand for in JavaScript?",
        answers: [
            { text: "Not a Number", correct: true },
            { text: "Number and Null", correct: false },
            { text: "New and Null", correct: false },
            { text: "None and Null", correct: false },
        ],
    },
    {
        question: "What will be the output of `2 + '2'` in JavaScript?",
        answers: [
            { text: "'22'", correct: true },
            { text: "4", correct: false },
            { text: "'4'", correct: false },
            { text: "22", correct: false },
        ],
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: [
            { text: "let myArray = [1, 2, 3];", correct: true },
            { text: "let myArray = (1, 2, 3);", correct: false },
            { text: "let myArray = {1, 2, 3};", correct: false },
            { text: "let myArray = <1, 2, 3>;", correct: false },
        ],
    },
    {
        question: "Which operator is used to assign a value to a variable in JavaScript?",
        answers: [
            { text: "=", correct: true },
            { text: "==", correct: false },
            { text: "===", correct: false },
            { text: ":=", correct: false },
        ],
    },
    {
        question: "What is the output of `typeof null` in JavaScript?",
        answers: [
            { text: "'object'", correct: true },
            { text: "'null'", correct: false },
            { text: "'undefined'", correct: false },
            { text: "'void'", correct: false },
        ],
    },
    {
        question: "Which keyword is used to define a constant variable in JavaScript?",
        answers: [
            { text: "const", correct: true },
            { text: "let", correct: false },
            { text: "var", correct: false },
            { text: "define", correct: false },
        ],
    },
    {
        question: "What is the purpose of the 'try...catch' statement in JavaScript?",
        answers: [
            { text: "To handle exceptions and errors", correct: true },
            { text: "To declare a function", correct: false },
            { text: "To create an array", correct: false },
            { text: "To define a class", correct: false },
        ],
    },
    {
        question: "Which event occurs when a user clicks on an HTML element?",
        answers: [
            { text: "click", correct: true },
            { text: "mouseover", correct: false },
            { text: "keydown", correct: false },
            { text: "focus", correct: false },
        ],
    },
    {
        question: "What does the 'map()' method do in JavaScript?",
        answers: [
            { text: "Creates a new array with the results of calling a provided function on every element in the calling array", correct: true },
            { text: "Filters the array based on a condition", correct: false },
            { text: "Executes a function on each element and returns the sum", correct: false },
            { text: "Sorts the array in ascending order", correct: false },
        ],
    },
    {
        question: "How do you create an object in JavaScript?",
        answers: [
            { text: "let myObject = {}; ", correct: true },
            { text: "let myObject = [];", correct: false },
            { text: "let myObject = ();", correct: false },
            { text: "let myObject = <>;", correct: false },
        ],
    },
    {
        question: "Which method is used to remove the last element from an array?",
        answers: [
            { text: "pop()", correct: true },
            { text: "shift()", correct: false },
            { text: "push()", correct: false },
            { text: "unshift()", correct: false },
        ],
    },
    {
        question: "What will be the result of `1 == '1'` in JavaScript?",
        answers: [
            { text: "true", correct: true },
            { text: "false", correct: false },
            { text: "undefined", correct: false },
            { text: "NaN", correct: false },
        ],
    },
    {
        question: "Which operator is used to compare two values in JavaScript?",
        answers: [
            { text: "==", correct: true },
            { text: "=", correct: false },
            { text: "=", correct: false },
            { text: "===", correct: false },
        ],
    },
    {
        question: "What is the result of `0 / 0` in JavaScript?",
        answers: [
            { text: "NaN", correct: true },
            { text: "0", correct: false },
            { text: "undefined", correct: false },
            { text: "Infinity", correct: false },
        ],
    },
    {
        question: "Which method is used to add one or more elements to the end of an array?",
        answers: [
            { text: "push()", correct: true },
            { text: "pop()", correct: false },
            { text: "shift()", correct: false },
            { text: "unshift()", correct: false },
        ],
    },
    {
        question: "What does 'DOM' stand for?",
        answers: [
            { text: "Document Object Model", correct: true },
            { text: "Data Object Model", correct: false },
            { text: "Document Output Model", correct: false },
            { text: "Data Output Model", correct: false },
        ],
    },
    {
        question: "What will `typeof []` return in JavaScript?",
        answers: [
            { text: "'object'", correct: true },
            { text: "'array'", correct: false },
            { text: "'list'", correct: false },
            { text: "'undefined'", correct: false },
        ],
    },
    {
        question: "How do you access the first element in an array?",
        answers: [
            { text: "array[0]", correct: true },
            { text: "array.first()", correct: false },
            { text: "array.beginning()", correct: false },
            { text: "array[1]", correct: false },
        ],
    },
    {
        question: "Which method returns the length of a string?",
        answers: [
            { text: "length", correct: true },
            { text: "size", correct: false },
            { text: "count", correct: false },
            { text: "length()", correct: false },
        ],
    },
    {
        question: "How do you create a new empty array in JavaScript?",
        answers: [
            { text: "let myArray = [];", correct: true },
            { text: "let myArray = {};", correct: false },
            { text: "let myArray = ();", correct: false },
            { text: "let myArray = <>;", correct: false },
        ],
    },
    {
        question: "What does 'NaN' stand for in JavaScript?",
        answers: [
            { text: "Not a Number", correct: true },
            { text: "Not a Name", correct: false },
            { text: "Number and Null", correct: false },
            { text: "Not a Null", correct: false },
        ],
    },
    {
        question: "What does the `filter()` method do?",
        answers: [
            { text: "Creates a new array with all elements that pass the test implemented by the provided function", correct: true },
            { text: "Creates a new array with all elements", correct: false },
            { text: "Sorts the array", correct: false },
            { text: "Finds the maximum value", correct: false },
        ],
    },
    {
        question: "Which method is used to convert a JSON string into a JavaScript object?",
        answers: [
            { text: "JSON.parse()", correct: true },
            { text: "JSON.stringify()", correct: false },
            { text: "JSON.convert()", correct: false },
            { text: "JSON.decode()", correct: false },
        ],
    },
    {
        question: "How do you check if a value is undefined in JavaScript?",
        answers: [
            { text: "value === undefined", correct: true },
            { text: "value == undefined", correct: false },
            { text: "value === null", correct: false },
            { text: "value = undefined", correct: false },
        ],
    },
    {
        question: "Which method is used to remove the first element from an array?",
        answers: [
            { text: "shift()", correct: true },
            { text: "pop()", correct: false },
            { text: "unshift()", correct: false },
            { text: "splice()", correct: false },
        ],
    },
    {
        question: "What does '===' operator do in JavaScript?",
        answers: [
            { text: "Compares both value and type", correct: true },
            { text: "Compares only value", correct: false },
            { text: "Compares only type", correct: false },
            { text: "Assigns value", correct: false },
        ],
    },
    {
        question: "How do you declare a constant variable in JavaScript?",
        answers: [
            { text: "const myVar;", correct: true },
            { text: "let myVar;", correct: false },
            { text: "var myVar;", correct: false },
            { text: "constant myVar;", correct: false },
        ],
    },
    {
        question: "What will be the result of `5 + '5'` in JavaScript?",
        answers: [
            { text: "'55'", correct: true },
            { text: "10", correct: false },
            { text: "5", correct: false },
            { text: "'5'", correct: false },
        ],
    },
    {
        question: "How do you find the type of a variable in JavaScript?",
        answers: [
            { text: "typeof variable", correct: true },
            { text: "type(variable)", correct: false },
            { text: "variable.type()", correct: false },
            { text: "variable.getType()", correct: false },
        ],
    },
    {
        question: "What will `0 == false` return in JavaScript?",
        answers: [
            { text: "true", correct: true },
            { text: "false", correct: false },
            { text: "undefined", correct: false },
            { text: "NaN", correct: false },
        ],
    },
    {
        question: "Which method is used to join all elements of an array into a string?",
        answers: [
            { text: "join()", correct: true },
            { text: "concat()", correct: false },
            { text: "combine()", correct: false },
            { text: "merge()", correct: false },
        ],
    },
    {
        question: "What will `typeof NaN` return in JavaScript?",
        answers: [
            { text: "'number'", correct: true },
            { text: "'NaN'", correct: false },
            { text: "'undefined'", correct: false },
            { text: "'object'", correct: false },
        ],
    },
    {
        question: "How do you create a new object with a prototype in JavaScript?",
        answers: [
            { text: "Object.create(proto)", correct: true },
            { text: "new Object(proto)", correct: false },
            { text: "Object.new(proto)", correct: false },
            { text: "Object.prototype(proto)", correct: false },
        ],
    },
    {
        question: "Which method is used to remove a specific element from an array by its index?",
        answers: [
            { text: "splice()", correct: true },
            { text: "slice()", correct: false },
            { text: "delete()", correct: false },
            { text: "pop()", correct: false },
        ],
    },
    {
        question: "What does `Number('10')` return in JavaScript?",
        answers: [
            { text: "10", correct: true },
            { text: "'10'", correct: false },
            { text: "undefined", correct: false },
            { text: "NaN", correct: false },
        ],
    },
    {
        question: "How do you create a new promise in JavaScript?",
        answers: [
            { text: "new Promise((resolve, reject) => { })", correct: true },
            { text: "Promise.create((resolve, reject) => { })", correct: false },
            { text: "Promise.new((resolve, reject) => { })", correct: false },
            { text: "createPromise((resolve, reject) => { })", correct: false },
        ],
    },
    {
        question: "What is the result of `null == undefined` in JavaScript?",
        answers: [
            { text: "true", correct: true },
            { text: "false", correct: false },
            { text: "undefined", correct: false },
            { text: "null", correct: false },
        ],
    },
    {
        question: "Which of the following is a valid way to define a function in JavaScript?",
        answers: [
            { text: "function myFunc() {}", correct: true },
            { text: "func myFunc() {}", correct: false },
            { text: "def myFunc() {}", correct: false },
            { text: "function: myFunc() {}", correct: false },
        ],
    },
    {
        question: "What does `JSON.stringify()` do in JavaScript?",
        answers: [
            { text: "Converts a JavaScript object to a JSON string", correct: true },
            { text: "Parses a JSON string to a JavaScript object", correct: false },
            { text: "Converts a JavaScript object to an XML string", correct: false },
            { text: "Parses an XML string to a JavaScript object", correct: false },
        ],
    },
    {
        question: "How do you create a new array from an existing array in JavaScript?",
        answers: [
            { text: "Array.from(existingArray)", correct: true },
            { text: "existingArray.newArray()", correct: false },
            { text: "existingArray.clone()", correct: false },
            { text: "Array.copy(existingArray)", correct: false },
        ],
    },
    {
        question: "What will `2 ** 3` return in JavaScript?",
        answers: [
            { text: "8", correct: true },
            { text: "6", correct: false },
            { text: "9", correct: false },
            { text: "5", correct: false },
        ],
    },
    {
        question: "How do you add a property to an existing object in JavaScript?",
        answers: [
            { text: "object.property = value", correct: true },
            { text: "object.addProperty(value)", correct: false },
            { text: "object.setProperty(value)", correct: false },
            { text: "object.property(value)", correct: false },
        ],
    },
    {
        question: "What does `String('123')` return in JavaScript?",
        answers: [
            { text: "'123'", correct: true },
            { text: "123", correct: false },
            { text: "undefined", correct: false },
            { text: "NaN", correct: false },
        ],
    },
    {
        question: "How do you iterate over an array in JavaScript?",
        answers: [
            { text: "array.forEach(item => { })", correct: true },
            { text: "array.each(item => { })", correct: false },
            { text: "array.iterate(item => { })", correct: false },
            { text: "for item in array", correct: false },
        ],
    },
    {
        question: "What does `Array.isArray([])` return in JavaScript?",
        answers: [
            { text: "true", correct: true },
            { text: "false", correct: false },
            { text: "undefined", correct: false },
            { text: "null", correct: false },
        ],
    },
    {
        question: "How do you create a new object with a specific prototype in JavaScript?",
        answers: [
            { text: "Object.create(proto)", correct: true },
            { text: "new Object(proto)", correct: false },
            { text: "Object.new(proto)", correct: false },
            { text: "Object.prototype(proto)", correct: false },
        ],
    },
    {
        question: "What does `Math.max(1, 2, 3)` return in JavaScript?",
        answers: [
            { text: "3", correct: true },
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "undefined", correct: false },
        ],
    },
    {
        question: "How do you check if an object has a property in JavaScript?",
        answers: [
            { text: "object.hasOwnProperty('property')", correct: true },
            { text: "object.propertyExists('property')", correct: false },
            { text: "object.contains('property')", correct: false },
            { text: "object.getProperty('property')", correct: false },
        ],
    },
    {
        question: "Which operator is used to concatenate two strings in JavaScript?",
        answers: [
            { text: "+", correct: true },
            { text: "&", correct: false },
            { text: "concat", correct: false },
            { text: "++", correct: false },
        ],
    },
    {
        question: "What does `Array.prototype.slice()` do in JavaScript?",
        answers: [
            { text: "Returns a shallow copy of a portion of an array into a new array", correct: true },
            { text: "Modifies the original array", correct: false },
            { text: "Removes an element from an array", correct: false },
            { text: "Adds an element to the end of an array", correct: false },
        ],
    },
    {
        question: "How do you convert a string to a number in JavaScript?",
        answers: [
            { text: "Number(string)", correct: true },
            { text: "parseInt(string)", correct: true },
            { text: "parseFloat(string)", correct: true },
            { text: "string.toNumber()", correct: false },
        ],
    },
    {
        question: "What is the result of `1 + '1'` in JavaScript?",
        answers: [
            { text: "'11'", correct: true },
            { text: "2", correct: false },
            { text: "11", correct: false },
            { text: "'1'", correct: false },
        ],
    },
    {
        question: "How do you create a function that returns a value in JavaScript?",
        answers: [
            { text: "function myFunc() { return value; }", correct: true },
            { text: "function myFunc() { value; }", correct: false },
            { text: "function myFunc() { return; }", correct: false },
            { text: "function myFunc() { yield value; }", correct: false },
        ],
    },
    {
        question: "What will `!!'false'` return in JavaScript?",
        answers: [
            { text: "true", correct: true },
            { text: "false", correct: false },
            { text: "undefined", correct: false },
            { text: "NaN", correct: false },
        ],
    },
    {
        question: "How do you create a new Set in JavaScript?",
        answers: [
            { text: "new Set()", correct: true },
            { text: "Set.new()", correct: false },
            { text: "Set.create()", correct: false },
            { text: "createSet()", correct: false },
        ],
    },
    {
        question: "What will `0 / 0` return in JavaScript?",
        answers: [
            { text: "NaN", correct: true },
            { text: "0", correct: false },
            { text: "Infinity", correct: false },
            { text: "undefined", correct: false },
        ],
    },
    {
        question: "How do you add an event listener in JavaScript?",
        answers: [
            { text: "element.addEventListener('event', handler)", correct: true },
            { text: "element.on('event', handler)", correct: false },
            { text: "element.addHandler('event', handler)", correct: false },
            { text: "element.listen('event', handler)", correct: false },
        ],
    },
    {
        question: "What does `Math.floor(4.7)` return in JavaScript?",
        answers: [
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "4.7", correct: false },
            { text: "NaN", correct: false },
        ],
    },
    {
        question: "How do you create a new RegExp object in JavaScript?",
        answers: [
            { text: "new RegExp(pattern, flags)", correct: true },
            { text: "RegExp.new(pattern, flags)", correct: false },
            { text: "RegExp.create(pattern, flags)", correct: false },
            { text: "new RegExpObject(pattern, flags)", correct: false },
        ],
    },
    {
        question: "What will `parseInt('10px')` return in JavaScript?",
        answers: [
            { text: "10", correct: true },
            { text: "NaN", correct: false },
            { text: "10px", correct: false },
            { text: "undefined", correct: false },
        ],
    },
    {
        question: "How do you check if a value is an array in JavaScript?",
        answers: [
            { text: "Array.isArray(value)", correct: true },
            { text: "value.isArray()", correct: false },
            { text: "Array.check(value)", correct: false },
            { text: "value instanceof Array", correct: false },
        ],
    },
    {
        question: "What will `2 + 2 == '4'` return in JavaScript?",
        answers: [
            { text: "true", correct: true },
            { text: "false", correct: false },
            { text: "undefined", correct: false },
            { text: "NaN", correct: false },
        ],
    },
    {
        question: "How do you create a new map in JavaScript?",
        answers: [
            { text: "new Map()", correct: true },
            { text: "Map.new()", correct: false },
            { text: "Map.create()", correct: false },
            { text: "createMap()", correct: false },
        ],
    },
    {
        question: "What will `parseFloat('10.5px')` return in JavaScript?",
        answers: [
            { text: "10.5", correct: true },
            { text: "10", correct: false },
            { text: "10.5px", correct: false },
            { text: "NaN", correct: false },
        ],
    },
    {
        question: "What does `JSON.parse()` do in JavaScript?",
        answers: [
            { text: "Parses a JSON string to a JavaScript object", correct: true },
            { text: "Converts a JavaScript object to a JSON string", correct: false },
            { text: "Converts a JSON string to an XML string", correct: false },
            { text: "Parses an XML string to a JSON string", correct: false },
        ],
    },
    {
        question: "How do you convert an object to a JSON string in JavaScript?",
        answers: [
            { text: "JSON.stringify(object)", correct: true },
            { text: "object.toString()", correct: false },
            { text: "object.toJSON()", correct: false },
            { text: "object.toJSONString()", correct: false },
        ],
    },
    {
        question: "What does `undefined == null` return in JavaScript?",
        answers: [
            { text: "true", correct: true },
            { text: "false", correct: false },
            { text: "NaN", correct: false },
            { text: "undefined", correct: false },
        ],
    },
    {
        question: "How do you get the type of a variable in JavaScript?",
        answers: [
            { text: "typeof variable", correct: true },
            { text: "variable.type()", correct: false },
            { text: "variable.getType()", correct: false },
            { text: "Type.of(variable)", correct: false },
        ],
    },
    {
        question: "What does `Array.prototype.concat()` do in JavaScript?",
        answers: [
            { text: "Combines two or more arrays", correct: true },
            { text: "Splits an array into multiple arrays", correct: false },
            { text: "Removes elements from an array", correct: false },
            { text: "Sorts an array", correct: false },
        ],
    },
    {
        question: "What will `0 === false` return in JavaScript?",
        answers: [
            { text: "false", correct: true },
            { text: "true", correct: false },
            { text: "undefined", correct: false },
            { text: "NaN", correct: false },
        ],
    },
    {
        question: "How do you check if a value is NaN in JavaScript?",
        answers: [
            { text: "Number.isNaN(value)", correct: true },
            { text: "value.isNaN()", correct: false },
            { text: "isNaN(value)", correct: false },
            { text: "NaN.check(value)", correct: false },
        ],
    },
    {
        question: "How do you get a random number between 0 and 1 in JavaScript?",
        answers: [
            { text: "Math.random()", correct: true },
            { text: "Math.randomNumber()", correct: false },
            { text: "Math.getRandom()", correct: false },
            { text: "random()", correct: false },
        ],
    },
    {
        question: "What does `String(123)` return in JavaScript?",
        answers: [
            { text: "'123'", correct: true },
            { text: "123", correct: false },
            { text: "undefined", correct: false },
            { text: "NaN", correct: false },
        ],
    },
    {
        question: "What will `Infinity - Infinity` return in JavaScript?",
        answers: [
            { text: "NaN", correct: true },
            { text: "Infinity", correct: false },
            { text: "0", correct: false },
            { text: "undefined", correct: false },
        ],
    },
    {
        question: "What does `Object.keys(object)` return in JavaScript?",
        answers: [
            { text: "An array of a given object's own enumerable property names", correct: true },
            { text: "An array of all the properties in an object", correct: false },
            { text: "The length of the object", correct: false },
            { text: "The object itself", correct: false },
        ],
    },
    {
        question: "How do you remove whitespace from the beginning and end of a string in JavaScript?",
        answers: [
            { text: "string.trim()", correct: true },
            { text: "string.clean()", correct: false },
            { text: "string.strip()", correct: false },
            { text: "string.removeWhitespace()", correct: false },
        ],
    },
    {
        question: "How do you check if a string contains another string in JavaScript?",
        answers: [
            { text: "string.includes(substring)", correct: true },
            { text: "string.contains(substring)", correct: false },
            { text: "string.indexOf(substring) > -1", correct: false },
            { text: "string.has(substring)", correct: false },
        ],
    },
    {
        question: "What does `Boolean('')` return in JavaScript?",
        answers: [
            { text: "false", correct: true },
            { text: "true", correct: false },
            { text: "undefined", correct: false },
            { text: "NaN", correct: false },
        ],
    },
    {
        question: "How do you create a new Date object in JavaScript?",
        answers: [
            { text: "new Date()", correct: true },
            { text: "Date.new()", correct: false },
            { text: "Date.create()", correct: false },
            { text: "new DateObject()", correct: false },
        ],
    },
    {
        question: "What does `Math.random()` return in JavaScript?",
        answers: [
            { text: "A random number between 0 (inclusive) and 1 (exclusive)", correct: true },
            { text: "A random integer between 0 and 1", correct: false },
            { text: "A random integer between 0 and 100", correct: false },
            { text: "A random number between 1 and 10", correct: false },
        ],
    },
    {
        question: "What does `parseInt('10')` return in JavaScript?",
        answers: [
            { text: "10", correct: true },
            { text: "'10'", correct: false },
            { text: "NaN", correct: false },
            { text: "undefined", correct: false },
        ],
    },
    {
        question: "What does `Object.assign(target, source)` do in JavaScript?",
        answers: [
            { text: "Copies all enumerable properties from source to target", correct: true },
            { text: "Merges two objects into one", correct: false },
            { text: "Clones the source object", correct: false },
            { text: "Deletes properties from the target object", correct: false },
        ],
    },
    {
        question: "What does `Number('10.5')` return in JavaScript?",
        answers: [
            { text: "10.5", correct: true },
            { text: "'10.5'", correct: false },
            { text: "10", correct: false },
            { text: "NaN", correct: false },
        ],
    },
    {
        question: "How do you remove an item from an array in JavaScript?",
        answers: [
            { text: "array.splice(index, 1)", correct: true },
            { text: "array.remove(index)", correct: false },
            { text: "array.delete(index)", correct: false },
            { text: "array.pop(index)", correct: false },
        ],
    },
    {
        question: "How do you check if a variable is of type number in JavaScript?",
        answers: [
            { text: "typeof variable === 'number'", correct: true },
            { text: "variable instanceof Number", correct: false },
            { text: "Number.isNumber(variable)", correct: false },
            { text: "variable.isNumber()", correct: false },
        ],
    },
    {
        question: "What does `String('123')` return in JavaScript?",
        answers: [
            { text: "'123'", correct: true },
            { text: "123", correct: false },
            { text: "undefined", correct: false },
            { text: "NaN", correct: false },
        ],
    },
    {
        question: "How do you convert a number to a string in JavaScript?",
        answers: [
            { text: "String(number)", correct: true },
            { text: "number.toString()", correct: true },
            { text: "number.toStringify()", correct: false },
            { text: "number.convertToString()", correct: false },
        ],
    },
    {
        question: "How do you find the length of an array in JavaScript?",
        answers: [
            { text: "array.length", correct: true },
            { text: "array.size", correct: false },
            { text: "array.count", correct: false },
            { text: "array.getLength()", correct: false },
        ],
    },
    {
        question: "What will `[] + []` return in JavaScript?",
        answers: [
            { text: "'' (an empty string)", correct: true },
            { text: "[]", correct: false },
            { text: "undefined", correct: false },
            { text: "NaN", correct: false },
        ],
    },    
];

export default questions;
