function sumOfTwo(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);
    let counter = 0;
    let match = false

    for (let x = start; x <= end; x++) {
        if (match) {
            break;
        }
        for (let y = start; y <= end; y++) {
            counter++;
            if (x + y === magic) {
                console.log(`Combination N:${counter} (${x} + ${y} = ${magic})`);
                match = true
                break;
            }
        }
    }
    if (!match) {
        console.log(`${counter} combinations - neither equals ${magic}`)
    }
}