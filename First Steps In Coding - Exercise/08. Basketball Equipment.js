function basketball(input) {
    let tax = Number(input[0]);
    let shoes = tax - (tax * 0.4);
    let equip = shoes - (shoes * 0.2);
    let ball = equip / 4;
    let accessoaries = ball / 5;

    console.log(tax + shoes + equip + ball + accessoaries);
}