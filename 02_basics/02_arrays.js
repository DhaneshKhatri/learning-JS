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
const AnArray =[ 1,2,3,[4,5,6],[7,8,[9,10,[11,12]]]]
// console.log(AnArray.flat(Infinity))
// we get =>[1, 2, 3, 4, 5,6, 7, 8, 9, 10, 11, 12]


