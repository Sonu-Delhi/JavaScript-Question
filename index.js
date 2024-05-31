// Q-1:- outPut this code
// function calculateSum(limit){
//     let sum = 0
//     for(let i=0;i<=limit;i++){
//         if(i%2===0){
//             sum+=i;
//         }
//     }
//     return sum
// }
// console.log(calculateSum(10));

// Q-2:- Output this code
// function checkNumber(value){
//     let result='';
//     switch(true){
//         case (value>10):
//             result="Greater then 10"
//             break;
//         case (value<5):
//             result="Less then 5"
//             break;
//         default:
//             result="Between 5 and 10"
//     }
//     return result
// }
// console.log(checkNumber(7));
// console.log(checkNumber(11));


// Q-3:- OutPut this code
// function processArray(arr){
//     let evenCount = 0;
//     let oddSum = 0;
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]%2===0){
//             evenCount++
//         }
//         else{
//             oddSum +=arr[i]
//         }
//     }
//     if(evenCount>oddSum){
//         return "More Even"
//     }else if(evenCount<oddSum){
//         return "More Odd"
//     }else{
//         return "Equal evens and odds"
//     }
// }
// console.log(processArray([1,2,3,4,5,6]));

// Q-4:- Diamond Star Pattern
// let n=7;
// let str = "";
// for(let i=1;i<=n;i++){
//     for(let j=n;j>i;j--){
//         str+=" "
//     }
//     for(let k=1;k<=i*2-1;k++){
//         str+="*"
//     }
//     str+="\n"
// }
// for(let i=n-1;i>=1;i--){
//     for(let j=n;j>i;j--){
//         str+=" "
//     }
//     for(let k=1;k<=i*2-1;k++){
//         str+="*"
//     }
//     str+="\n"
// }
// console.log(str);

// Q-5:- To print a hollow rectangle Star pattern
// let rows=5;
// let cols =10;
// let str = ""
// for(let i=1;i<=rows;i++){
//     for(let j=1;j<=cols;j++){
//         if(i===1 || j===1){
//             str+="* "
//         }
//         else if(i===rows || j===cols){
//             str+="* "
//         }else{
//             str+="  "
//         }
//     }
//     str+="\n"
// }
// console.log(str);

// Q-6:- Entry control loop and exit control loop in javaScript
// Entry control loop
// The loop condition is cheked before executing the loop body
// Example for and while loop

// for loop
// for(let i=1;i<=5;i++){
//     console.log(i);
// }

// while loop
// let i=0;
// while(i<5){
//     console.log(i);
//     i++
// }

// Exit control loop
// The loop condition checked after executing the loop body
// Example do-while loop
// let i=0;
// do{
//     console.log(i);
//     i++
// }while(i<5)

// Q-7:-
// Spread Operator in javaScript
// used to spread elements of an array or object
// let arr = [1,2,3]
// let newarr = [...arr,4,5]
// console.log(newarr);