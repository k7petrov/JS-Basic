function onTimeForTheExam(input) {

    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMin = Number(input[3]);
    let examTime = examMin + examHour * 60;
    let arriveTime = arriveMin + arriveHour * 60;
    let diffTime = Math.abs(examTime - arriveTime);
    let hours = parseInt(diffTime / 60);
    let mins = diffTime % 60;

    if (arriveTime > examTime) {
        console.log("Late");
        if (hours < 1) {
            console.log(`${mins} minutes after the start`);
        } else if (mins > 9) {
            console.log(`${hours}:${mins} hours after the start`);
        } else {
            console.log(`${hours}:0${mins} hours after the start`);
        }

    } else if (diffTime == 0) {
        console.log("On time");
    }
    else if (arriveTime < examTime && diffTime <= 30) {
        console.log("On time");
        console.log(`${mins} minutes before the start`)
    } else {
        console.log("Early")
        if (hours < 1) {
            console.log(`${mins} minutes before the start`)
        }
        else if (mins > 9) {
            console.log(`${hours}:${mins} hours before the start`)
        } else {
            console.log(`${hours}:0${mins} hours before the start`)
        }

    }
}