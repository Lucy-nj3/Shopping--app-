let firstName = "lucy"
let lastName = "Wambugu"
let email = "Wambugulucy@ example.com"
let phone = 254711345222
let address = " 132, Mainstreet"
let password = " lucy123"

let typedEmail = "Wambugulucy@example.com"
let typedpassword ="lucy123"



function login(){//creating a funtion
    if(email == typedEmail){
        if( password == typedpassword){ 
            console.log( "Proceed to home")
        }else{ 
            console.log("incorrect password")
        }
}else{
    console.log("User not Found")
}
}

login()//calling a function


//Arrays
let studentNames =['John','Jane','Will','Jack','June']

//add item to array
studentNames.push('Joseph')
console.log(studentNames)

//get item in array
let student = studentNames[2] //index
let message = `Hi ${student}`// string interpolation
//let message2 = "Hi" + student //string concatenation

console.log(message)
//console.log(message2)

let scores = [92,98,96,100,100]
console.log(scores)

//objects
let student1 = {
    firstName: "lucy"
    lastName: "Wambugu"
    email : "Wambugulucy@example.com"
    phone  :254711345222
    address : " 132, Mainstreet"
    password : " lucy123"
    scores: 95

}
//get item in object, using dot and key
let student1Name = student1.firstName+' '+student.lastname
console.log(student1Name)student1.firstName + ''+student1. lastName
