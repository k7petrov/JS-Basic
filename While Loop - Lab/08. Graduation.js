function graduation(input) {

    let name = input[0];
    let i = 1;
    let sumGrade = 0;
    let repeat = 0;

    while (i <= 12) {

        let grade = Number(input[i]);

        if (grade < 4) {
            repeat++;
            if (repeat > 1) {
                console.log(`${name} has been excluded at ${i} grade`)
                break;
            }

            continue;
        }

        sumGrade += grade
        i++;
    }
    if (repeat < 2) {
        console.log(`${name} graduated. Average grade: ${(sumGrade / 12).toFixed(2)}`)
    }
}