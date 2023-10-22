function sum(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let buffer = ""

    for (let i = start; i <= end; i++) {

        let string = "" + i
        let x = Number(string[0]) + Number(string[2]) + Number(string[4]);
        let y = Number(string[1]) + Number(string[3]) + Number(string[5]);

        if (x === y) {
            buffer += `${i} `
        }
    }
    console.log(buffer)
}