//(1)
function sumArray(arr){
    let sum = 0;
    for (let i=0; i< arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

const numbers=[1,2,3,4,5];
console.log(sumArray(numbers));

//(2)
const person={
    name: 'Yukinari ODAKA',
    age: 18,
    city: 'Misato town',
    hobbies: ['game','coding','music']
};
function updatePerson(obj,key,value){
    obj[key]= value;
}
//ex updating age
updatePerson(person,'age',19);
console.log(person.age);
updatePerson(person,'city','Aizu');
console.log(person.city);

//(3)
function factorial(n){
    if (n===0){return 1;}
    return n * factorial(n-1);
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(7));

//(4)


