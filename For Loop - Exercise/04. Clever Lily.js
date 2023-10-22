function cleverLily(input) {

    let age = Number(input[0]);
    let machinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let money = 0;
    let toys = 0;

    for (let i = 1; i <= age; i++) {

        if (i % 2 === 0) {
            money += 10 * i / 2 - 1;
        } else {
            toys++;
        }
    }

    let totalMoney = toyPrice * toys + money

    if (totalMoney >= machinePrice) {
        console.log(`Yes! ${(totalMoney - machinePrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(machinePrice - totalMoney).toFixed(2)}`)
    }
}