function coins(input) {

    let change = 100 * Number(input[0]);
    let a = parseInt(change / 200);
    let all = 0;

    if (change >= 200) {
        change -= a * 200;
        all = a;
    }

    if (change >= 100) {
        change -= 100;
        all++;
    }

    if (change >= 50) {
        change -= 50;
        all++;
    }

    if (change >= 40) {
        change -= 40;
        all += 2;
    }

    if (change >= 20) {
        change -= 20;
        all++;
    }

    if (change >= 10) {
        change -= 10;
        all++;
    }

    if (change >= 5) {
        change -= 5;
        all++;
    }

    if (change >= 4) {
        change -= 4
        all += 2
    }

    if (change >= 2) {
        change -= 2
        all++;
    }

    if (change >= 1) {
        change -= 1
        all++;
    }

    console.log(all)

}