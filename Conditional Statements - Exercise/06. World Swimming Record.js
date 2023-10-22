function swimmingRecord(input) {

    let worldRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timeFor1Meter = Number(input[2]);

    let delay = Math.trunc(distance / 15) * 12.5;
    let totalTime = distance * timeFor1Meter + delay;

    if (totalTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - worldRecord).toFixed(2)} seconds slower.`);
    }

}