function walking(input) {
    let index = 0;
    let command = input[index];
    index++;
    let steps = 0;
    let lastSteps = 0;

    while (command !== "Going home") {

        steps += Number(command);

        if (steps >= 10000) {

            break;
        }

        command = input[index];
        index++;

    }

    if (command === "Going home") {
        lastSteps = Number(input[index]);
        steps += lastSteps
    }

    if (steps < 10000) {

        console.log(`${10000 - steps} more steps to reach goal.`);

    } else {

        console.log("Goal reached! Good job!");
        console.log(`${(steps - 10000)} steps over the goal!`);

    }
}