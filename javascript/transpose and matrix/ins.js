//matrix// A matrix is a collection of numbers arranged into a fixed number of rows and columns. 

const matrix = [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10]
];
console.log (matrix);
console.log ( typeof matrix);
matrix[1] = [55, 61, 22];


let mat = [
    [22, 33, 44],
    [55, 66, 77],
    [88, 99, 100],
    [11, 22, 33]
];
console.log (mat);
console.log ( typeof mat);
mat[0] = [10, 11, 12];
console.log (mat);


//Transpose of a Matrix//The transpose of a matrix is obtained by swapping rows with columns.


function transpose(matrix) {
	const transposed = [];
	for (let i = 0; i < matrix[0].length; i++) {
		transposed.push([]);
		for (let j = 0; j < matrix.length; j++) {
			transposed[i].push(matrix[j][i]);
		}
	}
	return transposed;
}
const Matrix = [
	[1, 2],
	[3, 4],
    [5, 6]
];
console.log(transpose(Matrix));


