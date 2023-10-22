function sum(input) {

    let index = 0;
    let command = input[index]
    index++;
    let sumOfPrime = 0;
    let sumOfNon = 0;

    while (command !== "stop") {
        let current = Number(command);

        if (current < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }

        if ((current % 2 === 0 || current % 3 === 0) && (current !== 2 && current !== 3)) {
            sumOfNon += current
        } else if (current > 0) {
            sumOfPrime += current
        }

        command = input[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${sumOfPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumOfNon}`)
}