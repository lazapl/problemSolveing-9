/*Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples
addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300


function addUp(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
}


console.log(addUp(4));   // Output: 10
console.log(addUp(13));  // Output: 91
console.log(addUp(600)); // Output: 180300


------------------------------------------------------------------------------------------------------*/



/*Create a function that takes an integer n and returns multiplication table of 1 to n numbers up to nth multiple.

------------------------------------------------------------------------------------------------------*/


/*Create a function that takes an integer n and returns multiplication table of 1 to n numbers up to nth multiple.

function multTable(num){
    let newArray = []
    for(let i=1; i<=num; i++){
        let row = []
        for(let j=1; j<num; j++){
            row.push(i * j)
        }
        newArray.push(row)
    }
    return newArray
}

console.log(multTable(2))
console.log(multTable(3))
console.log(multTable(5))


------------------------------------------------------------------------------------------------------*/


/*Write a function that finds the sum of values on both diagonals of a square matrix
function diagonalSum(matrix) {
    let n = matrix.length;
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < n; i++) {

        primaryDiagonalSum += matrix[i][i];


        secondaryDiagonalSum += matrix[i][n - 1 - i];
    }


    return primaryDiagonalSum + secondaryDiagonalSum;
}


let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(diagonalSum(matrix));

------------------------------------------------------------------------------------------------------*/

