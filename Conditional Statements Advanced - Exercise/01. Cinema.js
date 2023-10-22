function cinema(input) {

    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);

    if (type === "Premiere") {
        console.log((r * c * 12).toFixed(2) + " leva");
    } else if (type === "Normal") {
        console.log((r * c * 7.5).toFixed(2) + " leva");
    } else {
        console.log((r * c * 5).toFixed(2) + " leva");
    }
}