const myDate = new Date()
// console.log(myDate) // we get =>   2024-09-25T08:13:00.317Z
//console.log(myDate.toDateString())    //we get =>  Wed Sep 25 2024
// console.log(myDate.toISOString())       //we get =>2024-09-25T08:17:46.645Z
// console.log(myDate.toJSON())     //we get =>2024-09-25T08:17:46.645Z
// console.log(myDate.toString()) //we get => Wed Sep 25 2024 08:14:46 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleDateString())    //we get => 9/25/2024
// console.log(myDate.toLocaleString())  //we get => 9/25/2024, 8:22:02 AM
console.log(myDate.toLocaleTimeString())   //we get =>8:22:54 AM
console.log(myDate.toUTCString()); 
