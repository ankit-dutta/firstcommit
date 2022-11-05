console.log("Its my first project")


var obj = {num:2}

var obj2 = {num:10}

var a = [2,3,4]



function add(a,b){

 return this.num + a +b

}

//CALL

console.log(add.call(obj,3,1))

console.log(add.call(obj2,3,1))

//APPLY

console.log(add.apply(obj,a))

//bind

let newbind = add.bind(obj)

console.log(newbind(2,3))



let student = {

 age :20,

}

function print(){

 return this.age

}

var showage = print.bind(student)

console.log(showage())







//curring by using bind



let multiply = function (x,y){

 console.log(x * y)

}



let multiplybytwo = multiply.bind(this, 2)

let multiplybythree = multiply.bind(this, 3)





multiplybytwo(2)

multiplybythree(2)



//curring by using closure



let multiplyclosure = function(x){

 return function (y){

   console.log(x*y)

 }

}

let multiplybyfive = multiplyclosure(5)

multiplybyfive(2)
