function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    // n = 3 rows and 2 = 2 columns
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
      let row = [];
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix); // [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]
  
  /*Basicamente o primeiro for vai colocar o [], o segundo for vai colocar 
  a quantidade de 0 dentro do [], quando finalizar o processo do for
  a variável new Array vai englobar todo o for e dar um push no que foi 
  armazenado na varável row. */