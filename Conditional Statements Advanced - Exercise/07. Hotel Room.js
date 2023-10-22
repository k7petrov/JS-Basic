function hotelRoom(input) {

    let month = input[0];
    let count = Number(input[1]);
    let apartPrice = 0;
    let studioPrice = 0;

    if (month === "May" || month === "October") {
        apartPrice = 65;
        studioPrice = 50;
    } else if (month === "June" || month === "September") {
        apartPrice = 68.70;
        studioPrice = 75.20;
    } else {
        apartPrice = 77;
        studioPrice = 76;
    }

    if (count > 7 && count <= 14 && (month === "May" || month === "October")) {
        studioPrice *= 0.95;
    }
    if (count > 14 && (month === "May" || month === "October")) {
        studioPrice *= 0.7;
    }
    if (count > 14 && (month === "June" || month === "September")) {
        studioPrice *= 0.8;
    }
    if (count > 14) {
        apartPrice *= 0.9;
    }

    console.log(`Apartment: ${(apartPrice * count).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPrice * count).toFixed(2)} lv.`);
}