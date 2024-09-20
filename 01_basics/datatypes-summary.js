//In official documentation  there are two types of Data on the basis of how the data is store in memory and how we can access the data :
 // 01  Primitive  ( 7 types : String , Numbers , boolean , null, undefined, symbol, bigInt)
  
 //Num ( both are treated as a number with and without decimal)
 const score = 100;
 const scoreValue  = 100.3
// boolean 
const isLoggedIn = false
//null
const outsideTemp = null;
//undefined
let MyAge;  //treated as undefined 
//symbol (in my understanding in Symbol ( we can assgin same value to multiple values but they will not be treated as equal))
const id = Symbol('123')
const anotherid = Symbol('123')
// console.log(id === anotherid)   // we get fasle in output ( as we know both variables have same value '123' but by symbol there different and unique treated)

//bigint
const bignumber = 23927392374934792429n //(by putting n in the last of very big num then 2^53 the number is treated as bigInt)


 // 02  Non- Primitive (Reference Type)
 //type : (Array , Objects , Functions)

 //Array
 const hero= ["shaktiman", "batman", "superman"]
//  console.log(hero)

//object
let myObj ={
    Fullname :"Dhanesh",  
    city :"TandoAdam", 
}
//Function
const myFunction =function(){
    console.log("hello je");
}
 




// ***********************TYPES OF MEMORY**********************************************
//there are two types of memory
//1 : stack (Stack memory is used in premitive datatypes)  
//jab bi stack memory ka use hota he to hume, jo bi variable used kiya he he uski copy milti he. mtlb hum agr value me koi change karenge to original value me koi bi change ni hoga balke us copy me change hoga
//Example
 let myYoutubeName = "hiteshchoudhrydotcom"
 let anotherName =myYoutubeName
 anotherName ="kumardhanesh950@gmail.com"
 console.log(myYoutubeName)
 console.log(anotherName);
 



//2 : Heap(heap memory is used i non_primitive datatypes)
//jab bi heap memory ka use hota he to hume, jo bi variable used kiya he uska reference milta he. mtlb hum agr value me koi change karenge to original value me bi change hoga

let userOne ={
    name :"Dhanesh kumar",
    email: "kumardhanesh950@gmail.com"
}

let usertwo = userOne
usertwo.email ="khatridhanesh951@gmail.com"
console.log(userOne)
console.log(usertwo)