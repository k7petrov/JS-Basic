function calculate(input) {

    let deposit = Number(input[0]);
    let months = Number(input[1]);
    let percent = Number(input[2] / 100);
    let sum = deposit + months * ((deposit * percent) / 12);
    console.log(sum);

}