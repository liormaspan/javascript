let num=1
let bottle = Number(prompt("Enter a number"))
do{
if(bottle-num<0){

console.log(`${bottle} bottles of beer on the wall`);
console.log(`${bottle} bottles of beer`);

console.log(`take ${bottle}, pass it around`);
console.log(`0 bottles of beer on the wall`);
    // bottle=-num;
        break;
}
// console.log(`${bottle} bottles of beer on the wall`);
console.log(`${bottle} bottles of beer`);
bottle-=num;

console.log(`take ${num}, pass it around`);
console.log(`${bottle}, bottles of beer on the wall`);
num+=1
}while(bottle>0)

