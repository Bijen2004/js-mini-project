
// Create a function fetchData that simulates fetching data from an API. The function should return a promise that resolves with a hardcoded array of objects after 2 seconds. Each object should represent a user with properties id, name, and age.

const data = [
    {id:1,name:'Bijen',age:19},
    {id:2,name:'Aavash',age:28},
    {id:3,name:'Abhinab',age:20}
]

function fetchData(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(data);
        },2000);
    })
}

fetchData()
.then((msg) => {
   console.log(msg) 
}).catch((err) => {
    console.error(err)
});


//Create a function createCounter that returns an object with two methods: increment and getCount. The increment method should increase the internal count by 1, and the getCount method should return the current count. Use a closure to maintain the internal count variable.


function createCounter(){
    let count=0;
    return {
        increment:function(){
            count +=1
        },
        getCount:function(){
            return count
        }
    }
}

const counter  = createCounter()
console.log(counter.getCount())
counter.increment()
console.log(counter.getCount())


//Create a function processData that accepts an array of numbers and a callback function. The function should process each number in the array using the callback function and return a new array of processed numbers.

function processData(arr,process){
    const processedArray = []
    for(let i=0;i<arr.length;i++){
        processedArray.push(process(arr[i]))
    }
    return processedArray
}

function addOne(arr){
    return arr+1
}

const firstArray = [1,2,3,4,5]
const secondArray = processData(firstArray,addOne)
console.log(secondArray)


//Rewrite the fetchData function from Question 1 using async and await.


async function getData(){
    const users = await fetchData()
    return users
}

getData().then((msg)=>console.log(msg))

//Given an array of numbers, create a function that doubles each number using map.

const arrayOfNumber =[4,5,6,7,8]

mapping = arrayOfNumber.map((num)=>num+num)
console.log(mapping)


// Given an array of numbers, create a function that filters out numbers less than 10 using filter.

const arrayOfNumber2 =[4,5,60,70,80]

filtering = arrayOfNumber2.filter((num)=>num>10)
console.log(filtering)


//Given an array of numbers, create a function that finds the first number greater than 15 using find.

finding = arrayOfNumber2.find((num)=>num>15)
console.log(finding)

//Given an array of numbers, create a function that sums all numbers using reduce.

function sumArray(arr){
    const sum = arr.reduce((x,y)=>x+y)
    return sum
}

const sum = sumArray(arrayOfNumber)
console.log(sum)


//Given an array of user objects, write a function to transform this array into an object where the keys are user IDs and the values are the corresponding user objects.

function arrayToObj(users) {
    const userObj = users.reduce((obj, user) => {
        obj[user.id] = user;
        return obj;
    }, {});

    return userObj;
}

const objArrays = arrayToObj(data);

console.log(objArrays)


//Create a Person class with a constructor that accepts name and age parameters. Add a method describe that returns a string describing the person.

class Person{
    constructor(name,age){
        this.name =name
        this.age = age
    }

    describe(){
        return `${this.name} is ${this.age} years old`
    }
}

const person1 = new Person('Bijen',19)
console.log(person1.describe())


//Create a Student class that extends Person and adds a grade property. Add a method study that returns a string indicating the student is studying.

class Student extends Person{
    constructor(name,age,grade){
        super (name,age);
        this.grade = grade;
    }

    study(){
        return `${this.name} is studying`
    }

}

const student1 = new Student('Ram',20,'A')
console.log(student1.describe())
console.log(student1.study())

//Modify the fetchData function to randomly reject the promise with an error message 'Failed to fetch data'. Handle this error using .catch when calling the function.


function fetchData2(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()<0.2){
                resolve(data)
            }else{
                reject(new Error('Failed to fetch data'))
            }
        },1000);
    })
}

fetchData2()
.then((msg) => {
   console.log(msg) 
}).catch((err) => {
    console.error(err)
});


//Modify the fetchData function with async/await to handle errors using try/catch blocks.
async function getData2(){
    try{
        const users = await fetchData2()
        return users
    } catch(error){
        console.error(error)
    }
}

getData2().then((msg)=>console.log(msg))
.catch((err)=>console.error(err))



//Given an array of users, where each user has a name and an array of hobbies, create a function that returns an array of all unique hobbies using reduce.

function getAllUniqueHobbies(users) {
    const allHobbies = users.reduce((x, y) => {
        return x.concat(y.hobbies);
    }, []);

    const uniqueHobbies = [...new Set(allHobbies)];
    
    return uniqueHobbies;
}

const usersData = [
    { name: 'Bijen', hobbies: ['reading', 'gardening'] },
    { name: 'Abhinab', hobbies: ['gardening', 'cooking'] },
    { name: 'Aavash', hobbies: ['reading', 'painting'] }
];

const uniqueHobbies = getAllUniqueHobbies(usersData);
console.log(uniqueHobbies);



/*

1) Why are promises used in JavaScript? Explain the advantages of using promises over
traditional callback functions.

=>Promises make async JavaScript code cleaner and easier to understand by allowing sequential execution
 of tasks and centralized error handling, improving code readability and maintenance.




2) What is a closure in JavaScript? Provide an example.

Closure in JavaScript is a function that remembers the variables from the place where it was created, even if it's executed elsewhere. This means the function has access to those variables even after the surrounding code has finished running.

example :

function outerFunction() {
    let outerVariable = 'outer function';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction; 
}

const innerFunc = outerFunction(); 
innerFunc(); 


3)What is a callback function and why is it used in JavaScript?

=>A callback function in JavaScript is a function you give to another function to be run later, usually after some task has finished, like loading data or responding to an event. It helps make JavaScript programs more flexible and responsive.



4)What are async/await in JavaScript and how do they improve asynchronous
programming?

=>Async/await in JavaScript simplifies asynchronous programming by allowing async functions to pause execution until promises are resolved, making code appear synchronous, thus enhancing readability, error handling with try/catch blocks, and sequential code execution for improved maintainability.


5)Write the difference between ES6 and JS.

=>  ES6 (ECMAScript 2015) is a specific version of JavaScript, introducing new features and syntax enhancements to the language. JavaScript is the broader term referring to the entire language and its various versions, including ES6.

ES6 introduced significant updates such as arrow functions, let and const for variable declaration, classes, template literals, destructuring assignment, and more, while JavaScript encompasses all versions, including ES6, and is the language used for scripting web pages and building web applications.


6) What are some of the major features introduced in ES6?

=> ES6 (ECMAScript 2015) introduced several major features and syntax enhancements to JavaScript, including:

Arrow functions: A concise syntax for writing anonymous functions.
let and const: Block-scoped variable declarations.
Classes: A more convenient syntax for creating constructor functions and inheritance.
Template literals: String interpolation and multiline strings.
Destructuring assignment: Easily extract values from arrays or objects.
Default parameters: Specify default values for function parameters.
Rest parameters: Gather remaining function arguments into an array.
Spread syntax: Expand arrays or iterables into individual elements.
Promises: A built-in way to work with asynchronous operations.
Modules: A standardized way to organize and import/export code between files.

These are some of the key features introduced in ES6, which have significantly improved the readability, maintainability, and expressiveness of JavaScript code.



*/





