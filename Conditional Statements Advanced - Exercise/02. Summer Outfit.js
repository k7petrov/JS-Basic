function summerOutfit(input) {

    let degreese = Number(input[0]);
    let time = input[1];

    if (time === "Morning") {
        if (degreese >= 10 && degreese <= 18) {
            console.log(`It's ${degreese} degrees, get your Sweatshirt and Sneakers.`)
        } else if (degreese > 18 && degreese <= 24) {
            console.log(`It's ${degreese} degrees, get your Shirt and Moccasins.`)
        } else {
            console.log(`It's ${degreese} degrees, get your T-Shirt and Sandals.`)
        }
    } else if (time === "Afternoon") {
        if (degreese >= 10 && degreese <= 18) {
            console.log(`It's ${degreese} degrees, get your Shirt and Moccasins.`)
        } else if (degreese > 18 && degreese <= 24) {
            console.log(`It's ${degreese} degrees, get your T-Shirt and Sandals.`)
        } else {
            console.log(`It's ${degreese} degrees, get your Swim Suit and Barefoot.`)
        }
    } else {
        if (degreese >= 10 && degreese <= 18) {
            console.log(`It's ${degreese} degrees, get your Shirt and Moccasins.`)
        } else if (degreese > 18 && degreese <= 24) {
            console.log(`It's ${degreese} degrees, get your Shirt and Moccasins.`)
        } else {
            console.log(`It's ${degreese} degrees, get your Shirt and Moccasins.`)
        }

    }
}