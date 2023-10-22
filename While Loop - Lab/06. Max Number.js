function maxNumber(input) {

    let maxNum = Number.MIN_SAFE_INTEGER;
    let i = 0;
    let command = input[i];

    while (command !== "Stop") {

        let current = Number(input[i]);

        if (current > maxNum) {
            maxNum = current;
        }

        i++;
        command = input[i]
    }
    console.log(maxNum)
}