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
const arr = [1, 2 , 3, 4, 5]

// for(var i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

arr.forEach((element, iteration) => {
    console.log('iteration')
    console.log(element)
    console.log(element, iteration)
})