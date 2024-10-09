// there are two ways to declare an object
// (1) litteral (se singleton ni banta)   // (2) constructor(se always singleton banta he) => object.create

//singleton (mtlab ye apni tarah ka ek hi object he)
const mySym =Symbol("key1")

const Jsuser={
    name :"Dhanesh",
    "fullname" :"vishal kumar",
    [mySym] : "mykey1",
    age :18,
    location :"jaipur",
    email:"kumardhanesh950@gmail.com",
    isloggedIn : false,

}
// console.log(Jsuser.email)
// we can change the values of key by
Jsuser.email ="dhaneshmth46@gmail.com"
// console.log(Jsuser);    Note agr hum chahte hen to value change ni ker paye koi to hum object.freeze use kerenge
// Object.freeze(Jsuser)
Jsuser.name ="ashok" // dekhen output me name Dhanesh hi raha
// console.log(Jsuser)


Jsuser.greeting =function(){
console.log(`hello JSuser,${this.name}`);

}
