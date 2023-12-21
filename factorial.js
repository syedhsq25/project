// function fact(num){

//     if (num==0){
//         return 1;

//     }
//     else{
//      return   num = num*fact(num-1)
//       }

    
// }
// let a=fact(5)
// console.log(a)


// function fact(num){
//     let op=1;
//     if(num==0){
//         return 1;
//     }
//     else{
//     for(let i=1;i<=num;i++){
//           op*=i
         
//     }
//     return op;
// }}
// let a=fact(5)
// console.log(a)


function fact(num){
    if(num==0){
        return 1;
    }
    else{
        return num= num*fact(num-1);
    }

}
let a = fact(4)
console.log(a)