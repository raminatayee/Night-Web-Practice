// Spred Syntax 
const array =[2,3,4,5];
const addNewArray=[0,1, ...array];
console.log(addNewArray);

const atayee = ["ramin","khalid","khalil"];
const ramin= ["atayee", ...atayee];
console.log(ramin);

// Return in js 
function addNum(num1 , num2){
return num1 + num2;
}
var x = addNum(7 , 3);
console.log(x);

// Destructuring
const yuerInfo =["Ramin","Atayee",21]
const info =[name,lastName,age]= yuerInfo;
console.log(age)