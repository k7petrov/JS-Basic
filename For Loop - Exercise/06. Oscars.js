function oscars(input) {

    let actorName = input[0];
    let startingPoints = Number(input[1]);
    let judges = Number(input[2]);

    for (let i = 3; i < input.length; i++) {

        let judgeName = input[i];
        i++;
        let judgePoints = judgeName.length * Number(input[i]) / 2;
        startingPoints += judgePoints;

        if (startingPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${startingPoints.toFixed(1)}!`)
            break;
        }
    }

    if (startingPoints <= 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - startingPoints).toFixed(1)} more!`)
    }
}