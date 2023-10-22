function salary(input) {

    let openTabs = Number(input[0]);
    let salary = Number(input[1]);
    let tab = "";
    let fine = 0;

    for (let i = 2; i <= input.length; i++) {
        tab = input[i];
        switch (tab) {
            case "Facebook": fine += 150; break;
            case "Instagram": fine += 100; break;
            case "Reddit": fine += 50; break;
        }
    }

    if (fine >= salary) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(Math.floor(salary - fine))
    }
}