function cinema(input) {

    let index = 0;
    let command = input[index];
    index++;
    let standard = 0;
    let student = 0;
    let kid = 0;
    let currentMovieTickets = 0
    let freeSpace = Number(input[index]);
    index++;
    let ticket = input[index];
    let totalTickets = 0;

    while (command !== "Finish") {

        while (ticket !== "End") {

            if (ticket === "standard") {
                standard++;
            } else if (ticket === "student") {
                student++;
            } else {
                kid++;
            }

            currentMovieTickets++;

            if (currentMovieTickets >= freeSpace) {
                break;
            }

            index++;
            ticket = input[index]
        }

        console.log(`${command} - ${(currentMovieTickets / freeSpace * 100).toFixed(2)}% full.`);
        totalTickets += currentMovieTickets
        currentMovieTickets = 0;
        index++;
        command = input[index];
        index++;
        freeSpace = Number(input[index]);
        index++;
        ticket = input[index];

    }

    console.log(`Total tickets: ${(totalTickets)}`);
    console.log(`${(student / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standard / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kid / totalTickets * 100).toFixed(2)}% kids tickets.`);
}