function specialNumbers(input) {

    let num = Number(input[0]);
    let buffer = ""

    for (let i = 1111; i <= 9999; i++) {

        let current = i + "";

        let a = Number(current[0]);
        let b = Number(current[1]);
        let c = Number(current[2]);
        let d = Number(current[3]);

        if (num % a === 0 && num % b === 0 && num % c === 0 && num % d === 0) {
            buffer += i + " ";
        }
    }
    console.log(buffer);
}