function project([arg1, arg2]) {
    let name = arg1;
    let projects = Number(arg2);
    let hours = projects * 3
    console.log(`The architect ${name} will need ${hours} hours to complete ${projects} project/s.`);
}