// there are two ways to declare an object
// (1) litteral (se singleton ni banta)   // (2) constructor(se always singleton banta he) => object.create

//singleton (mtlab ye apni tarah ka ek hi object he)


//object literals
const jsuser ={
    "name" : "Dhanesh kumar",         // by defualt javascript name as a string mean in real "name" he
    age :19,
    email: "kumardhanesh950@gmail.com",
    isloggedIn :false,
    lastloggIndays:["monday","saturday"]
}
// Now let's access the values of object
console.log(jsuser["email"]) // we get => Dhanesh kumar
// but we have another method also agr hume value object me ese mile "name" :"Dhanesh kumar" to isko hume sirf ese hi access ker sakte
// console.log(jsuser["name"]) //we get