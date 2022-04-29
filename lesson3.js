/*let stringLenght =`string`
console.log(stringLenght)


for(let i = 0; i < stringLenght.length; i++){
    console.log(stringLenght.length[i])
}*/

let str = `aabab`
let countA = 0
let countB = 0

for(let i = 0; i < str.length; i++){
   
    if (str[i] ===`a`) countA++
    if (str[i] ===`b`) countB++
    if (countA > countB) console.log(`more A`)
    if (countA < countB) console.log(`more B`)
    }