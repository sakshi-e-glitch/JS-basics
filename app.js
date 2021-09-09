// for loop--------------------------------------------------------------------------------------------------------------------------------------------
// for (var i=0; i<10; i++)
// {   var age =19
//     console.log(i)
// }

// const temp = () =>{
//     var don = "dontknow"
// }

// console.log(temp())

// while loop------------------------------------------------------------------------------------------------------------------------------------------------
// let iteration = 0

// while (iteration < 10){
//     console.log(iteration)
//     iteration++

// }


//Array methods-----------------------------------------------------------------------------------------------------------------------------------------------------
// const balls = document.querySelectorAll('balls')
// // const balls = document.getElementsByClassName('balls')
// const body = document.querySelector('body')

// const arr = [1, 2 , 3, 4, 5]
// console.log(arr[0])

// while (arr.length < 15){
//     arr.push("iteration")
//     console.log(arr.length)
// }
// console.log(arr.length)

// const added = arr.includes(100)
// console.log(added)
// const added = arr.unshift(100)
// console.log(arr)

// arr.shift()
// arr.shift()
// console.log(arr)

// arr.splice(2)
// console.log(arr)


//Iteration over array
// const arr = [1, 2 , 3, 4, 5]

// for(var i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// arr.forEach((element, iteration) => {
//     console.log('iteration')
//     console.log(element)
//     console.log(element, iteration)
// })

// let age = 19
// console.log(`Your age is ${age}`)



//ES6--------------------------------------------------------------------------------------------------------------------------------------------------------------
// const arr =[1, 2, 3, 4]
// console.log(arr[2])


// const [one, two, three, four, five] = arr   ES6 array Destructing
// console.log(five)

// function getscores(){
//     return [90,100]
// }

// const [x,y,z] = getscores()
// x=10  this will throw an error
// console.log(x)
// console.log(y)
// console.log(z)

//ES6 object destructuring
// const obj={
//     fullname: "Sakshi Pandey",
//     email: "sakshi@gmail.com",
//     age: 19
// }

// console.log(obj.email)

// let {dum, age, email, fullname} = obj;
// console.log(email)
// console.log(dum)

// const person={
//     firstname: "Sakshi",
//     lastname: "Pandey",
//     age1: 19,
//     middlename: "DNA"
// }

// let {age1, firstname, lastname, middlename = " " }= person;
// console.log(age1)
// console.log(firstname)
// console.log(lastname)
// console.log(middlename)


// function add (x,y){
//     return x+y;
// }
// console.log(add(10,20))

// let add = function(x,y){
//     return x+y
// }
// console.log(add(10,20))

//Arrow function-----------------------------------------------------------------------------------------------------------------
// let add = (x,y) => {
//     return x+y;
// }
// console.log(add(10,20))

// //'this' refers to the obj that is currently being executed
// const counter = {
//     count: 2,
//     next: function() {
//         return 100*(this.count)
//     }
// }
// console.log(counter)
// console.log(counter.next());
// console.log(counter)
// console.log(counter.next());

//diff between map & for each..map returns a new array whereas for each doesn't

// let ranks = [1, 2, 3, 4];


// console.log(ranks.map((e, index) => {
//     return (e+1)
//       })
//     )

// console.log(ranks.forEach((e, index) => {
//     return (e+1)
//       })
//     )

//     const newArr = ranks.map((e, index) => {
//         if(e%2===0)
//         return e
//         // else 
//         // return index
//     }) 
    
// console.log(newArr)    

// let newfilterarr = ranks.filter((e,index)=> {
//     // console.log(e)
//     if(e%2===0)
//     return e
// })
// console.log(newfilterarr)

//Promises:is a js obj that returns a value which we hope to recieve in future but not immediately--------------------------------------------------------------------------
// three stages of promise: pending, fulfilled, rejected

let concert = true
let attendConcert = new Promise(function(resolve,reject)
{
    setTimeout(() => {
        if(concert) {resolve("BOB ATTEND THE CONCERT")                      
        }
        else{
          reject("BOB FAILED TO ATTEND THE CONCERT")
        }
    }, 2000)
})

console.log(attendConcert)
console.log(attendConcert)

attendConcert.then((data)=>console.log(data))
attendConcert.catch((error)=>console.log(data))

attendConcert.then((data)=>console.log(data).catch((error)=>console.log(data))

