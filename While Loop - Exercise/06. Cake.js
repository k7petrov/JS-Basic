function cake(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let area = a * b;
    let index = 2;
    let command = input[index];
    index++;

    while (command !== "STOP") {

        command = Number(command);
        area -= command;

        if (area <= 0) {
            console.log(`No more cake left! You need ${Math.abs(area)} pieces more.`);
            break;
        }

        command = input[index];
        index++;
    }

    if (area > 0) {
        console.log(`${area} pieces are left.`)
    }
}