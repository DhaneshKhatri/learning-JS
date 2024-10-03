//arrays

const num =[0,1,2,3,4,5]
const heros= ["superman","batman","spiderman"]
// console.log(heros[0]) //we can access the values of array by index value

// we can declare arry like this 
const myArr = new Array(1,2,3,4,5,6)
// console.log(myArr[0])

// some methods
// myArr.push(6) // add value in last of Array
// myArr.push(7) // add value in last of array
// myArr.pop() // remove last value of array
// myArr.shift()  // remove first value of the array


// console.log(myArr.indexOf(5)) // we are asking index of myArr
// myArr.unshift(9) =>  // Array k start se me value add kerta he..but hum isko use ni kerte ku k start me add kerne se baki sari value ko shift hona perta he..for example 0 ka index pehly 0 tha but ab 0 ka index 1 hogya ku k start me 0 index p 9 agaya
// myArr.shift() // remove 1st value of array

// console.log(myArr.includes(9))
 //this is question method , hum ne pucha 9 included he array me jo ans boolean me ayega true/false

// console.log(myArr.indexOf(4))  // yaha hume index pucha 4 ka which is 3 
// note agr element ni hoga array me to uska index -1 ayega

const mynewArr = myArr.join() // .join() converts our array into string
// console.log(myArr);
// console.log(mynewArr);
// console.log(typeof mynewArr)

const Arry1 = [7,8,9,10]
const Arry2 =[7,8,9,10]   
// console.log(Arry1.slice(1,2))    // [ 8 ]
// console.log(Arry2.splice(1,2))   //[ 8, 9 ]
// console.log(Arry1)               //[ 7, 8, 9, 10 ]
// console.log(Arry2)               //[ 7, 10 ]

//note here ; slice method jab hum use kerte hen to us se original array me bi koi change ni ata
//note here ; splice method k use se original array me bi change ata he

