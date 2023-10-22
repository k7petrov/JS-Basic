function vacation(input) {

    let moneyForVacation = Number(input[0]);
    let money = Number(input[1]);
    let index = 2;
    let command = input[index];
    index++;
    let current = Number(input[index]);
    index++;
    let spentCount = 0;
    let days = 0;

    while (spentCount !== 5) {

        if (money >= moneyForVacation) {
            console.log(`You saved the money for ${days} days.`)
            break;
        }

        days++;

        if (command === "save") {
            money += current;
            spentCount = 0;

        } else {

            money -= current;
            spentCount++;

            if (money < 0) {
                money = 0;
            }
        }

        command = input[index];
        index++;
        current = Number(input[index]);
        index++;

    }

    if (spentCount >= 5) {
        console.log("You can't save the money.");
        console.log(days);
    }
}