function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let rest = "";

    if (season === "summer") {
        rest = "Camp";
    } else {
        rest = "Hotel";
    }

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            budget *= 0.3;
        } else {
            budget *= 0.7;
        }
    } else if (budget < 1001) {
        destination = "Balkans";
        if (season === "summer") {
            budget *= 0.4;
        } else {
            budget *= 0.8;
        }
    } else {
        destination = "Europe";
        rest = "Hotel";
        budget *= 0.9;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${rest} - ${budget.toFixed(2)}`);
}