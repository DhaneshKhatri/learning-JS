const marvel_heros =[ "thor", "ironman", "spiderman"]
const dc_heros =["superman", "flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros) 
// here we get 
//=>  [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] 
//    array k ander array output ata he mtlb ye full dc array k as a element treat ker raha
//    note: hume array k is element k ander k elements ko bi access ker sakte hen =>
//    console.log(marvel_heros[3][1])   // we get => flash

// to combine both array is single array we have .concat() method
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros) // we get=> [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//NOTE: we have also another method for combine which is spread method for 2 or more array
const myallHeros= [...marvel_heros,...dc_heros]
// console.log(myallHeros)

// let supppose we have
const AnArray =[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// console.log(AnArray.flat(Infinity))
// we get =>[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// console.log(Array.isArray("hitesh"))  // here we are asking kiya yeh array he? we get=> false 
// console.log(Array.from("hitesh"))  // here we converted this string into array =>[ 'h', 'i', 't', 'e', 's', 'h' ]


// console.log(Array.from({name : "Dhanesh"})) // we get empty array [] because hume btana hoga k hune keys ka array chahiye ya values ka
let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(score1,score2,score3)) we get =>[ 100, 200, 300 ]
