function password(input) {
    
    let i = 0;
    let name = input[i];
    i++;
    let correctPass = input[i];
    i++;
    let tempPass = input[i];
    i++;

    while (tempPass !== correctPass) {
        i++;
        tempPass = input[i];
    }

    console.log(`Welcome ${name}!`)
}