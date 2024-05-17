let a=5
let b=9

if (a<b){console.log(a)}else{console.log(b)}

let c=30
switch(c){
case "c %15===0":console.log("FizzBuzz")
break
case "c %3===0":console.log("Fizz")
break
case "c%5===0":console.log("Buzz")
break
}

if (c % 15 === 0){console.log("FizzBuzz")}else if 
(c % 3===0){console.log("Fizz")}
else if (c % 5===0){console.log("Buzz")}

const array =[1,8,3,2,5,6];

    for (let i=0; i<array.length; i++)
{const year = parseInt(array[i]);

switch (year){
    case 1:console.log(array[i]+"is 1");
    break;
    case 2:console.log(array[i]+"is 2");
    break;
    case 3:console.log(array[i]+"is 3");
    break;
    case 4:console.log(array[i]+"is 4");
    break;
    default:console.log(array[i]+"is other grade");
    break;
}
}


