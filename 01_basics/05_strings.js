let name ="Dhanesh "
let age =25
// console.log(name + age)
// but the above method is old to concat strings and declare string
//In modern days we do like this:

// console.log(`hello my name is ${name} and my age is ${age}`);

//we can also declare a string like this
let gameName = new String('hiteshhc')
    // console.log(gameName)
//we can also access the key values of this string
//Methods (we can check types of method in browser console window)
// console.log(gameName[2])
// console.log(gameName.__proto__)
// console.log(gameName.charAt(2))
// console.log(gameName.toUpperCase())
const newstring = gameName.substring(0,4)
// console.log(newstring)

const anOtherstring= gameName.slice(-8,4)
// console.log(anOtherstring);
const gameName1= "   vishal    "
// console.log(gameName1)
// console.log(gameName1.trim())

const url ="https://hitesh.com/hitesh%20choudhary"
// console.log(url.replace('%20' , '_'))


// console.log(url.includes('ites'))

//SPLIT
const myString ="Hello myself Dhanesh kumar"
// console.log(myString.split(' '))    // here we change our string into  arry on basis of space( we change on the basis of other things like '-' etc)


