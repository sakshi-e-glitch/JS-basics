// console.log("Hey this is my first piece of js code")
// console.log(123456789)

// console.warn("This is a warning")

// console.error(("This is an error"))


// DATATYPES
// Primitive data types------------------------------------------------------------------------------------------------------------------------

// var Name = "Nishtha"
// console.log(Name)

// let age=19
// console.log(typeof age) 
// let Name = 'a'
// console.log(typeof Name)
// let brand=null
// console.log(brand)



//Non primitive data types---------------------------------------------------------------------------------------------------------------------
// let arr = [1,2,3,4,5]
// arr.push("value")
// arr.push(false)
// console.log(arr)

// let Name= "Sakshi"
// let age = 19
// console.log(Name.toUpperCase)
// console.log(age. )


//VALUE OF CONST CAN'T BE CHANGED--------------------------------------------------------------------------------------------------------------
// const specific_name = "Sakshi"
// specific_name = "Piyush"

// console.log(specific_name)


//OPERATORS------------------------------------------------------------------------------------------------------------------------------------
// const a=2
// const b=15
// let c=0

//ARITHMETIC OPERATORS------
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a**b)
// console.log(b%a)

//ASSIGNMENT OPERATORS-------
// let Name = "Sakshi"
// let a=19
// a+= Name

// console.log(a)
// console.log(typeof a)


//COMPARISION OPERATORS-----------------------------------------------------------------------------------------------------------------------------------------
// const a= 21
// const b= 7
// const c = '21'

// console.log('a>b', a>b)
// console.log('a<b', a<b)
// console.log('a==b', a==b)
// console.log('a==c', a==c)
// console.log('a===c', a===c)

//LOGICAL OPERATORS-------------------------------------------------------------------------------------------------------------------------------------------
// const a = 10
// const b = 50

// const c= 35

// console.log( c>a && c<b)

// console.log('a == b', a == b)
// console.log('a != b', a != b)
// console.log('')

// console.log('Truth table for AND')
// console.log('')

// console.log('false && false', false && false)
// console.log('true && true', true && true)
// console.log('true && false', true && false)
// console.log('false && true', false && true)
// console.log('')

// console.log('Truth table for OR')
// console.log('')

// console.log('false|| false', false || false)
// console.log('true|| true', true || true)
// console.log('true|| false', true || false)
// console.log('false|| true', false || true)



//CONDITIONAL STATEMENTS-----------------------------------------------------------------------------------------------------------------------------------

// const a = 1.3
// console.log(typeof a)
// if(typeof a === 'float' || typeof a === 'string' || typeof a === 'boolean'){
//     console.log("Not a number")
// }

// else
// {   if(a===0)
//     {
//         console.log("Number is zero")
//     }
//     else if(a%2=== 0)
//     {
//         console.log("Number is even")
//     }
//     else
//     {
//         console.log("Number is odd")
//     }
// }


//DOM---------------------------------------------------------------------------------------------------------------------------------------------------------
// const element = document.getElementById('select_me')
// console.log(element)

// const element = document.getElementsByClassName('heading')
// console.log(element)

// const element = document.getElementsByTagName('div')
// console.log(element)

// const element =  document.querySelectorAll('.heading')
// console.log(element)


// const element = document.querySelector('#select_me')
// element.innerHTML = "This is from JS"
// console.log(element)


//STYLING ELEMENTS-----------------------------------------------------------------------------------------------------------------------------------------------
// element.style.color = "cyan"
// element.style = 'display:none'

// const element = document.querySelector('#select_me')

//  console.log(element.classList)
//  element.classList.add("Five")
//  console.log(element.classList)
//  element.classList.remove("One")
//  console.log(element.classList)


// const body = document.querySelector('body')
// console.log(body.classList.toggle('dark'))

// const value = element.classList.contains('three')
// console.log(value)

//toggle-------------------------------------------------------------------------------------------------------------------------------
// const button  = document.querySelector('button')
// const element  = document.querySelector('body')

// button.addEventListener('click', () =>{
//     element.classList.toggle("dark")
// } )

// const rock = document.querySelector('#rock')
// const paper = document.querySelector('#paper')
// const scissor = document.querySelector('#scissor')


//function----------------------------------------------------------------------------------------------------------------------------------------------------
// function logName(){
//     console.log("Nishtha")
// }
// logName()
// var Name = null
// function logName(Name="Enter your name"){
//     console.log(Name)
// }
// logName()

//keyword syntax--------------------------------------------------------------------------------------------------------------------------------------------
// function logName(Name = "Jhon Doe", age = 18){
//     console.log(Name + "You are" + age)
// }
// logName()

// function add(a=0, b=0)
// {
//      return a+b
// }
// const result = add(112,8)
// console.log(result)
// console.log(add(112,8))

// variable syntax----------------------------------------------------------------------------------------------------------------------------------------------
const add = function(a = 0, b = 0){
    return a+b
}
console.log(add(10,20))

//arrow syntax--------------------------------------------------------------------------------------------------------------------------------------------------
const add = (a = 0, b = 0) => {
    return a+b
}
console.log(add(10,20))
