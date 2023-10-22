function movie(input) {

    let budget = Number(input[0]);
    let people = Number(input[1]);
    let equipPerPerson = Number(input[2]);
    let decor = budget * 0.1;

    if (people > 150) {
        equipPerPerson *= 0.9;
    }

    let totalPrice = (people * equipPerPerson + decor);

    if (totalPrice > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`)
    }

}