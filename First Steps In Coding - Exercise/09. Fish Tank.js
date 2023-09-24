function aquarium(input) {
    let lenght = Number(input[0]);
    let widght = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    let volume = lenght * widght * height;
    let litres = volume / 1000;
    let x = litres - (litres * percent / 100);
    console.log(x);

}