function oldBooks(input) {

    let aniSBook = input[0];
    let i = 1;
    let books = input[i];
    i++;
    count = 0;

    while (books !== "No More Books") {

        if (aniSBook === books) {
            break;
        }

        count++;
        books = input[i];
        i++;

    }

    if (aniSBook === books) {
        console.log(`You checked ${count} books and found it.`);
    } else {
        console.log("The book you search is not here!")
        console.log(`You checked ${count} books.`)
    }
}