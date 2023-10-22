function sumOfNumbers(input) {

    let num = input[0];
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        let character = Number(num[i]);
        sum += character
    }

    console.log(`The sum of the digits is:${sum}`)

}