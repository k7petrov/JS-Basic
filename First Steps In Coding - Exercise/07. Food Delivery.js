function food(input) {
    let chicken = Number(input[0]) * 10.35;
    let fish = Number(input[1]) * 12.4;
    let vegetarian = Number(input[2]) * 8.15;
    let dessert = (chicken + fish + vegetarian) * 0.2;
    let bill = chicken + fish + vegetarian + dessert + 2.5;
    console.log(bill);
}