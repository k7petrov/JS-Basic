function toysShop(input) {

    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dools = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);


    let toysCount = puzzles + dools + bears + minions + trucks;
    let toysPrice = (puzzles * 2.6) + (dools * 3) + (bears * 4.1) + (minions * 8.2) + (trucks * 2);

    if (toysCount >= 50) {
        toysPrice = toysPrice * 0.75;
    }

    let rent = toysPrice * 0.1;
    let totalPrice = toysPrice - rent;

    if (totalPrice >= tripPrice) {
        console.log(`Yes! ${(totalPrice - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - totalPrice).toFixed(2)} lv needed.`);
    }

}