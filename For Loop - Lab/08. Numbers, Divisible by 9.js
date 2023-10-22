function numbersDivisibleBy9(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let sum = 0;
    let buffer = "";

    for (let i = start; i <= end; i++) {
        if (i % 9 === 0) {
            buffer += i + "\n"
            sum += i
        }
    }

    console.log("The sum: " + sum);
    console.log(buffer);
}