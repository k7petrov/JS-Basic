function moving(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let h = Number(input[2]);
    let volume = a * b * h;
    let index = 3;
    let command = input[index];

    while (command !== "Done") {

        let box = Number(command);
        volume -= box;

        if (volume < 0) {
            console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
            break;
        }

        index++;
        command = input[index];
    }

    if (volume >= 0) {
        console.log(`${volume} Cubic meters left.`)
    }
}