function minNumber(input) {
    
    let minNum = Number.MAX_SAFE_INTEGER;
    let i = 0;
    let command = input[i];

    while (command !== "Stop") {
        let current = Number(input[i]);

        if (current < minNum) {
            minNum = current;
        }

        i++;
        command = input[i]
    }
    console.log(minNum)
}