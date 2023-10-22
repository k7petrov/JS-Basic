function combination(input) {

    let sum = Number(input[0]);
    let counter = 0;
    
    for (let x = 0; x <= sum; x++) {
        for (let y = 0; y <= sum; y++) {
            for (let z = 0; z <= sum; z++) {
                if (x + z + y === sum) {
                    counter++;
                }
            }
        }
    }
    console.log(counter)
}