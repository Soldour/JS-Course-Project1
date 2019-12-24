let {
    matrix_add,
    matrix_create,
    matrix_transpose,
    matrix_print,
    matrix_from_file,
    matrix_multiply
 } = require('./functions.js')

 let {
    bubblSortAlg
 } = require('./sortFunction.js')

const rls = require('readline-sync')

console.log("Enter a command:")
let command = rls.prompt()
let arrayOfCommand = command.split(' ')

//console.log(process.argv)
let type = arrayOfCommand[0]
if (type === "matrix") {
    // matrix traspose
    // matrix multiplication
    // matrix add
    let operationType = arrayOfCommand[1];
    console.log(type, operationType);
    if (operationType === "transpose") {
        // one matrix
        let matrixFilePath = arrayOfCommand[2];
        let matrix = matrix_from_file(matrixFilePath)
        let transposed_matrix = matrix_transpose(matrix)
        matrix_print(transposed_matrix)
        //console.log(matrixStr, typeof matrixStr, matrix)
    } else if (operationType === "multiply") {
        // two matrices
        let matrixAFilePath = arrayOfCommand[2];
        let matrixA = matrix_from_file(matrixAFilePath)
        let matrixBFilePath = arrayOfCommand[3];
        let matrixB = matrix_from_file(matrixBFilePath)
        console.log("A")
        matrix_print(matrixA)
        console.log("B")
        matrix_print(matrixB)
        let matrixC = matrix_multiply(matrixA, matrixB)
        console.log("C")
        matrix_print(matrixC)
    } else if (operationType === "add") {
        //two matrices
        let matrixAFilePath = arrayOfCommand[2];
        let matrixA = matrix_from_file(matrixAFilePath)
        let matrixBFilePath = arrayOfCommand[3];
        let matrixB = matrix_from_file(matrixBFilePath)
        console.log("A")
        matrix_print(matrixA)
        console.log("B")
        matrix_print(matrixB)
        let matrixC = matrix_add(matrixA, matrixB)
        console.log("C")
        matrix_print(matrixC)
    }
    else {
        console.log("Unknown operation type");
    }
} else if (type === "array") {
    // sort
    if (arrayOfCommand[1] == "sort"){
        let ArrayFilePath = arrayOfCommand[2];
        let inputArray = matrix_from_file(ArrayFilePath);
        bubblSortAlg(inputArray);
    } else {
        console.log("invalid operation for array")
    }
    

} else {
    console.log("Unknown task type");
}