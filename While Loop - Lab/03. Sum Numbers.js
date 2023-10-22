function sumNumbers(input) {
    
    let i = 0;
    let n = Number(input[i]);
    i++;
    let sum = 0;

    while (n > sum) {
        sum += Number(input[i])
        i++;
    }
    console.log(sum)
}