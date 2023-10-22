function examPreparation(input) {
    let badRating = Number(input[0]);
    let index = 1;
    let task = input[index];
    index++;
    let rating = Number(input[index]);
    index++;
    let badCount = 0;
    let taskCount = 0;
    let sum = 0;

    while (task !== "Enough") {

        if (badCount === badRating) {
            console.log(`You need a break, ${badCount} poor grades.`)
            break;
        }

        if (rating <= 4) {
            badCount++;
        }

        taskCount++;
        sum += rating;
        task = input[index];
        index++;
        rating = Number(input[index]);
        index++;

    }
    task = input[index - 4]

    if (badCount < badRating) {

        console.log(`Average score: ${(sum / taskCount).toFixed(2)}`);
        console.log(`Number of problems: ${taskCount}`);
        console.log(`Last problem: ${task}`);
    }
}