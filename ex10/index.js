function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    console.log("Quantidade: ", len); // 5
    // Only change code below this line
    for (let i = 0; i < len; i++) {
        // Only change code above this line
        console.log(firstFive[i]);
    }
}

countToFive();

/*
1
2
3
4
5
 */

/*A forma correta de usar um for, é colocando o index sendo menor
que o valor da variável, porque o .length é 6, um array começa
contando a partir de 0. Sendo assim, eu vou pegar pegar o valor de 0 até 4.
Se eu colocasse menor ou igual, iria dar um erro, porque o valor de 5 não existe
em um array.*/