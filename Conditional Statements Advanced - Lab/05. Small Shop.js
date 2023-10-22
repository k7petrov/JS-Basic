function smallShop(input) {

    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);

    switch (city) {
        case "Sofia":
            switch (product) {
                case "coffee": console.log(quantity * 0.50); break;
                case "water": console.log(quantity * 0.80); break;
                case "beer": console.log(quantity * 1.2); break;
                case "sweets": console.log(quantity * 1.45); break;
                default: console.log(quantity * 1.6); break;
            } break;

        case "Plovdiv":
            switch (product) {
                case "coffee": console.log(quantity * 0.40); break;
                case "water": console.log(quantity * 0.70); break;
                case "beer": console.log(quantity * 1.15); break;
                case "sweets": console.log(quantity * 1.30); break;
                default: console.log(quantity * 1.5); break;
            } break;

        default:
            switch (product) {
                case "coffee": console.log(quantity * 0.45); break;
                case "water": console.log(quantity * 0.70); break;
                case "beer": console.log(quantity * 1.1); break;
                case "sweets": console.log(quantity * 1.35); break;
                default: console.log(quantity * 1.55); break;
            } break;

    }
}