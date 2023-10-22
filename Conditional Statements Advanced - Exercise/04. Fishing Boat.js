function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermans = Number(input[2]);
    let rent = 0;

    if (season === "Spring") {
        rent = 3000;
    } else if (season === "Winter") {
        rent = 2600;
    } else {
        rent = 4200;
    }
    if (fishermans < 7) {
        rent *= 0.9;
    } else if (fishermans < 12) {
        rent *= 0.85;
    } else {
        rent *= 0.75;
    }

    if (fishermans % 2 === 0 && season !== "Autumn") {
        rent *= 0.95;
    }
    let diff = Math.abs((budget - rent)).toFixed(2);
    if (budget >= rent) {
        console.log(`Yes! You have ${diff} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff} leva.`)
    }
}