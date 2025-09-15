var x=0;
let y=5;
const z="tak";
function IsPrime(x){
    for(let i=2;i*i<=x;i++){
        if(x%i==0){
            return false;
        }
    }
    return true;
}
function DivideNumbers(x,y){
    if(y!=0){
        console.log(x+"/"+y+"="+x/y);
    }
    else{
        console.log("Nie można dzielić przez 0");
    }
}
const { accessSync } = require('node:fs');
const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
DivideNumbers(6,0);
DivideNumbers(9,4);
rl.question("Podaj liczbe do sprawdzenia czy jest pierwsza: ", a => {
    console.log(IsPrime(a));
    rl.close();
});