function lunchBreak(input) {

    let serial = input[0];
    let episodDuration = Number(input[1]);
    let restDuration = Number(input[2]);

    let lunchBreak = restDuration / 8;
    let rest = restDuration / 4;
    let timeForMovie = restDuration - lunchBreak - rest;

    if (timeForMovie >= episodDuration) {
        console.log(`You have enough time to watch ${serial} and left with ${Math.ceil(timeForMovie - episodDuration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${serial}, you need ${Math.ceil(episodDuration - timeForMovie)} more minutes.`);
    }

}