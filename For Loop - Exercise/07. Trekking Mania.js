function trekkingMania(input) {

    let group = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= group; i++) {

        if (Number(input[i]) < 6) {
            musala += (Number(input[i]))
        } else if (Number(input[i]) < 13) {
            monblan += (Number(input[i]))
        } else if (Number(input[i]) < 26) {
            kilimandjaro += (Number(input[i]))
        } else if (Number(input[i]) < 41) {
            k2 += (Number(input[i]))
        } else {
            everest += (Number(input[i]))
        }
    }

    let people = musala + monblan + kilimandjaro + k2 + everest

    console.log((musala / people * 100).toFixed(2) + "%")
    console.log((monblan / people * 100).toFixed(2) + "%")
    console.log((kilimandjaro / people * 100).toFixed(2) + "%")
    console.log((k2 / people * 100).toFixed(2) + "%")
    console.log((everest / people * 100).toFixed(2) + "%")
}