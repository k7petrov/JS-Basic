function supplies(input) {
    let pencils = Number(input[0]) * 5.8;
    let markers = Number(input[1]) * 7.2;
    let detergent = Number(input[2]) * 1.2;
    let discount = Number(input[3]) / 100;
    let sum = pencils + markers + detergent;

    console.log(sum - (sum * discount));
}