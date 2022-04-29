/*let stringLenght =`string`
console.log(stringLenght)


for(let i = 0; i < stringLenght.length; i++){
    console.log(stringLenght.length[i])
}*/

/*let str = `aabab`
let countA = 0
let countB = 0

for(let i = 0; i < str.length; i++){
   
    if (str[i] ===`a`) countA++
    if (str[i] ===`b`) countB++
    if (countA > countB) console.log(`more A`)
    if (countA < countB) console.log(`more B`)
    }
    console.log(`a: $[countA]`, `b: $[countB]`)*/

/*function getName (a, b){
    return(a+b);

    }
    console.log (getName(12+13))*/


    /*let getName = function nameOfFunction(a, b){
        return a - b;
    }
    console.log(nameOfFunction (10-3))*/
    
    /*const functionArrow  = (a, b) =>{
        return a + b;
    }
    console.log (functionArrow(10, 20))*/

/*~function life(){

    console.log(3+2)
}()*/

/*function getMe(num, num2){
    return (num ** num2)
}
console.log(getMe (3,5))*/

/*коррирование - это.....(в реакте )    пример замыкания - коррирование - ф-ия в ф-ии
const func = (a)=>(b)=> a + b
console.log(func(1)(2))*/

function getLev(str, str2){
     return (str.length > str2.length ) ? `first is longer`: `second is longer`;
    
}
console.log(getLev(`you` ,`here`))