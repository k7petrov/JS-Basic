function trip(input) {
    let command = input[0];
    let index = 1;
    let needed = Number(input[index]);
    let money = 0;

    while (command !== "End") {

        index++;
        let current = Number(input[index])

        while (money < needed) {
            money += current
            index++;
            current = Number(input[index]);
        }

        console.log(`Going to ${command}!`);
        command = input[index];
        money = 0;
        index++;
        needed = Number(input[index])
    }
}