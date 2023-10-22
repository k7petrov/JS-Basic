function shopping(input) {

    budget = Number(input[0]);
    gpus = Number(input[1]);
    cpus = Number(input[2]);
    ram = Number(input[3]);

    let gpusPrice = gpus * 250;
    let cpusPrice = gpusPrice * 0.35 * cpus;
    let ramPrice = gpusPrice * 0.1 * ram;

    let totalPrice = gpusPrice + cpusPrice + ramPrice;

    if (gpus > cpus) {
        totalPrice = totalPrice - (totalPrice * 0.15);
    }

    if (totalPrice <= budget) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }

}