function tennisRanklist(input) {

    tournaments = Number(input[0]);
    startingPoints = Number(input[1]);
    tourPoints = 0;
    wins = 0;

    for (let i = 2; i <= input.length; i++) {

        let stage = input[i];

        switch (stage) {
            case "W": tourPoints += 2000; wins++; break;
            case "F": tourPoints += 1200; break;
            case "SF": tourPoints += 720; break;
        }
    }

    console.log(`Final points: ${startingPoints + tourPoints}`)
    console.log(`Average points: ${Math.floor(tourPoints / tournaments)}`)
    console.log(`${(wins / tournaments * 100).toFixed(2)}%`)
}