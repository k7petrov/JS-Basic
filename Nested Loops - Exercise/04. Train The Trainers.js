function trainers(input) {

    let judges = Number(input[0]);
    let command = input[1];
    let index = 2;
    let examRating = 0;
    let examCount = 0;
    let totalRating = 0;

    while (command !== "Finish") {

        for (let i = 1; i <= judges; i++) {
            let current = Number(input[index]);
            index++;
            examRating += current
        }

        console.log(`${command} - ${(examRating / judges).toFixed(2)}.`)

        totalRating += examRating / judges
        command = input[index];
        index++;
        examRating = 0;
        examCount++;

    }
    console.log(`Student's final assessment is ${(totalRating / examCount).toFixed(2)}.`)
}