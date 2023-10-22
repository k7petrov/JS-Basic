function accountBalance(input) {
    
    let i = 0;
    let command = input[i];
    i++;
    let total = 0;

    while (command !== "NoMoreMoney") {

        command = Number(command)

        if (command < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${command.toFixed(2)}`);
        total += command;

        command = input[i];
        i++;
    }
    console.log("Total: " + total.toFixed(2))
}