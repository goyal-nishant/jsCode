console.log(a);
var a = 9;
console.log(a);

hello("harry");
function hello(name) {
    console.log(name);
}
hello('nishant');

console.log(a);

var b = 5;
console.log(b);
b = 4;
console.log(b);


console.log(before);
var before = 43;
console.log(before);

var bike = {
    name: "Honda",
    color: "Red",
    start: function() {
        return "this is " + this.name;
    }
  }
var getName = bike.start();
console.log(getName)


var newObj = {
  name:'nishant',  
  getName: function() {
    console.log(this.name);
  }
}

var createObj = newObj.getName;
createObj();


function sayHello(){
    return "Hello " + this.name;
}
          
  var obj = {name: "Sandy"};
  sayHello.call(obj);

  function add(a) {
    return function(b) {
      return a+b;
    }
  }
  add(3,4);

  function multiply(a,b) {
    return a*b;
  }
  var func = multiply(5, 3); 
  console.log(func);  

  var Person = function(pName){
    var name = pName;
  
    this.getName = function(){
      return name;
    }
  }
  
  var person = new Person("Neelesh");
  console.log(person.getName());
  
  function randomFunc(color){
    var obj1 = {name:"Vivian", age:45};
    return function(age){
      return obj1.name + " is "+ "awesome " + age + " " + color;   
    }
  }
  
  var initialiseClosure = randomFunc('blue'); 
  
  console.log(initialiseClosure(64));

  var arr = [];
arr.push(2);

console.log(arr); // Outputs [2]


function applyFunction(arr, func) {
    return arr.map(func);
}

function double(x) {
    return x * 2;
}

const numbers = [1, 2, 3];
console.log(applyFunction(numbers, double)); // Output: [2, 4, 6]

function fetchData(callback) {
    setTimeout(() => {
        const data = 'Some data';
        callback(data);
    }, 5000);
}

function handleData(data) {
    console.log(data);
}

fetchData(handleData); // Output after 1 second: 'Some data'


function multipyBy2(sum) {
    console.log(sum*2);
}

function devideBy2(sum) {
    console.log(sum/2);
}

function action(num2,fn) {
    fn(num2);
}

action(3,multipyBy2);
action(3,devideBy2);