function repaiting(input) {
    let plastic = (Number(input[0]) + 2) * 1.5;
    let paint = ((Number(input[1])) + (Number(input[1]) * 0.1)) * 14.5;
    let thinner = Number(input[2]) * 5;
    let bags = 0.4;
    let crafstman = Number(input[3]) * (0.3 * (paint + plastic + thinner + bags));
    let sum = plastic + paint + thinner + bags + crafstman;
    console.log(sum);
}