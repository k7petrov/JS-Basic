function skiTrip(input) {

    let nights = Number(input[0] - 1);
    let type = input[1];
    let rating = input[2];

    let roomPrice = 18 * nights;
    let apartPrice = 25 * nights;
    let prApartPrice = 35 * nights;

    if (nights < 10) {
        apartPrice *= 0.7;
        prApartPrice *= 0.9;
    } else if (nights < 15) {
        apartPrice *= 0.65;
        prApartPrice *= 0.85;
    } else {
        apartPrice *= 0.5;
        prApartPrice *= 0.8;
    }

    if (rating === "positive") {
        apartPrice *= 1.25;
        prApartPrice *= 1.25;
        roomPrice *= 1.25;
    } else {
        apartPrice *= 0.9;
        prApartPrice *= 0.9;
        roomPrice *= 0.9;
    }

    if (type === `room for one person`) {
        console.log(roomPrice.toFixed(2));
    } else if (type === "apartment") {
        console.log(apartPrice.toFixed(2));
    } else {
        console.log(prApartPrice.toFixed(2))
    }

}