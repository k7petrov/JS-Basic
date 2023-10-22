function pyramid(input) {

    let n = Number(input[0]);
    let print = 1;
    let isFinish = false;
    let buffer = ""

    for (let r = 1; r <= n; r++) {

        for (let c = 1; c <= r; c++) {

            buffer += print + " ";
            print++;
            if (print > n) {
                isFinish = true
                break;
            }
        }
        console.log(buffer)
        buffer = ""

        if (isFinish) {
            break;
        }
    }
}