import readlineSync from "readline-sync"
function matA(){
    let rows= readlineSync.questionInt(" enter the rows")

let columns= readlineSync.questionInt(" enter the cols")
console.log(`matrix of ${rows} x ${columns}`)
let matrix=new Array(rows)
for (let i=0;i<matrix.length;i++){
    matrix[i]=new Array(columns)
}


for (let i=0;i<rows;i++){
    for(let j=0;j<columns;j++){
         matrix[i][j]=readlineSync.question(`enter the ${i} row and ${j} colum`)   
    
    }
}
 console.log(matrix)

// 
}
matA()