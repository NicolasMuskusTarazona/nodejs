const fs = require("fs");
// // leer archivos
// const first = fs.readFileSync('./data/first.txt', 'utf-8')
// const second = fs.readFileSync('./data/second.txt')

// console.log(first)
// console.log(second.toString())

fs.readFile("./data/first.txt", function (error, data) {
    if (error) {
    console.log(error);
}
    console.log(data.toString());

    fs.readFile("./data/second.txt", function (error, data) {
    if (error) {
        console.log(error);
    }
    console.log(data.toString());

    fs.writeFile(
        "./data/newfile.txt",
        "archivo creado desde fs",
        function (err, data) {
        console.log(err);
        console.log(data);
        }
    );
    });
});
