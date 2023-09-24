function yard([arg1]) {

    let greening = Number(arg1) * 7.61;
    let discount = greening * 0.18;
    let finalPrice = greening - discount
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}