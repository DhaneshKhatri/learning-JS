const myDate = new Date()
// console.log(myDate) // we get =>   2024-09-25T08:13:00.317Z
//console.log(myDate.toDateString())    //we get =>  Wed Sep 25 2024
// console.log(myDate.toISOString())       //we get =>2024-09-25T08:17:46.645Z
// console.log(myDate.toJSON())     //we get =>2024-09-25T08:17:46.645Z
// console.log(myDate.toString()) //we get => Wed Sep 25 2024 08:14:46 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleDateString())    //we get => 9/25/2024
// console.log(myDate.toLocaleString())  //we get => 9/25/2024, 8:22:02 AM
//console.log(myDate.toLocaleTimeString())   //we get =>8:22:54 AM
//console.log(myDate.toUTCString()); //we get => Sat, 28 Sep 2024 16:31:17 GMT


// console.log(typeof myDate)   //we get => object
let myCreatedDate = new Date( 2023, 10,2);
// console.log(myCreatedDate.toString())
let myTimestamp = Date.now();
// console.log(myTimestamp)  //1727542657983   we get milliseconds from 1 jan 1970
// console.log(myCreatedDate.getTime()) ; we get milliseconds from 01 jan 1970 to any specific time date 

// Note  we can convert these milliseconds into seconds
// console.log(Date.now()/1000) ; //we get 1727543378.473  in point then to covert this we use Math.floor()

// console.log(Math.floor(Date.now()/1000)) ;// we get => 1727543470

let newDate = new Date()
// console.log(newDate.getDate())  // we get only date
// console.log(newDate.getDay());// we get day in index num
// console.log(newDate.getMonth());// we get  month

// console.log(myDate.toLocaleString('default',{weekday: "long"}))
