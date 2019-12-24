let fs = require('fs')


function matrix_add(a, b) {
    let m=[]
     m=new Array(a .length);
     for (let i =0 ;i<m.length;i++){
         m[i]= new Array(a[i].length)
         if(a[i].length!=b[i].length && a.length!=a[i].length ) throw  Error (" the matirx should be equal")
         if(a.length!=a[i].length ) throw  Error (" the matirx should be equal")
         if(b.length!=b[i].length)throw  Error (" the matirx should be equal")

       for(let j=0 ; j<m[i].length; j++)
         {
             m[i][j]=a[i][j]+b[i][j];
         }
         
     }
     return m
}
    

function matrix_multiply(a, b) {
  let heightA = a.length
  let widthA  = a[0].length
  let heightB = b.length
  let widthB  = b[0].length
  if (heightB != widthA) throw new Error("can't multiply these matrices")
  let c = matrix_create(heightB, widthB)
  for (let i = 0; i < a.length; ++i) {
      for ( let j = 0; j <  a[0].length; ++j )
  { c[i][j] = 0;             // initialize the current cell
      for (let i = 0; i < a[0].length; ++i) {
        c[i][j] += a[i][j] * b[i][j];
        
      }}
      }
  return c
}

function matrix_from_file(filename) {
    let matrixBuffer = fs.readFileSync(filename)
    let matrixStr = matrixBuffer.toString()
    let matrix = JSON.parse(matrixStr)
    return matrix;
}

function matrix_print(m) {
    for (let i = 0; i < m.length; i++)
    {

      console.log(m[i])
    
    }
}

function matrix_transpose(m) {
    // performs operation
    let height = m.length
    let width  = m[0].length
    // console.log(height, width, m)
    if (height !== width) 
        throw new Error(    )
    let temp = matrix_create(height, width)
    for (let i = 0; i < height; i++)
    {
        for (let j = 0; j < width; j++)
        {
            temp[i][j] = m[j][i]
        }
    }
    return temp
}

function matrix_create(height, width) {
    let m = new Array(height)
    for (let i = 0; i < height; i++) {
        m[i] = new Array(width)
        for (let j = 0; j < width; j++)
            m[i][j] = 0
    }
    return m
 }

 module.exports = {
    matrix_add,
    matrix_create,
    matrix_transpose,
    matrix_print,
    matrix_from_file,
    matrix_multiply
 }

