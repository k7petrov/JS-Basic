function newHouse(input) {

    let type = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    switch (type) {
        case "Roses":
            price = count * 5;
            if (count > 80) {
                price *= 0.9;
            }
            break;
        case "Dahlias":
            price = count * 3.8;
            if (count > 90) {
                price *= 0.85;
            }
            break;
        case "Tulips":
            price = count * 2.8;
            if (count > 80) {
                price *= 0.85;
            }
            break;
        case "Narcissus":
            price = count * 3;
            if (count < 120) {
                price *= 1.15;
            }
            break;
        case "Gladiolus":
            price = count * 2.5;
            if (count < 80) {
                price *= 1.2;
            }
            break;
    }

    let difference = (Math.abs(budget - price)).toFixed(2)
    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${count} ${type} and ${difference} leva left.`);
    } else {
        console.log(`Not enough money, you need ${difference} leva more.`)
    }
}