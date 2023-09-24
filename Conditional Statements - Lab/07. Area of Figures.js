function figures(input) {

    let type = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);
    let area;

    if (type === "square") {
        area = a * a;

    } else if (type === "rectangle") {
        area = a * b;

    } else if (type === "circle") {
        area = Math.PI * a * a;

    } else {
        area = a * b / 2;
    }

    console.log(area.toFixed(3));
}