function workingHours(input) {
    let hour = Number(input[0]);
    let day = input[1];

    if (hour >= 10 && hour <= 18) {
        switch (day) {
            case "Sunday": console.log("closed"); break;
            default: console.log("open"); break;
        }
    } else {
        console.log("closed");
    }
}