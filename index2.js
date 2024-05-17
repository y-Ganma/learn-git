const a=1
const b=2
const operation='*'
 switch (operation){case '+':console.log(a+b)
break
case '*': console.log(a*b)
break
default:
    console.log("unknown",operation,"defined")
break}


const animals =['dog','cat','bird','pig'];
console.log(animals);

const numbers =[32,54,35,12,76,97]
function min(a,b){if(a<b)return a;
else return b;}

function helloWorldNtimes(n){for(let i=0; i<n; i++)
console.log("Hello World!")}

function arrayMin(a){let min=a[0]
for (let i=1; i<a.length; i++)
if(a[i]<min) min=a[i]
return min;}
let n=min(5,7) ;let c=arrayMin(numbers)

console.log(n)
helloWorldNtimes(3)
console.log(c)