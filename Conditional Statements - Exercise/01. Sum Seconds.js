function sumSeconds(input) {

    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);

    let totalTime = firstTime + secondTime + thirdTime;
    let secs = totalTime % 60
    let mins = parseInt(totalTime / 60)

    if (secs < 10) {
        console.log(`${mins}:0${secs}`)
    } else {
        console.log(`${mins}:${secs}`)
    }


}