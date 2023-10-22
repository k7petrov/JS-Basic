function building(input) {

    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    let buffer = "";

    for (let f = floors - 1; f >= 1; f--) {
        for (let r = 0; r < rooms; r++) {
            if (f % 2 !== 0) {
                buffer += "A" + f + r + " "
            } else {
                buffer += "O" + f + r + " "
            }
        }

        buffer += "\n"
    }

    buffer = "\n" + buffer;
    for (let l = rooms - 1; l >= 0; l--) {

        buffer = "L" + floors + l + " " + buffer
    }

    console.log(buffer)
}