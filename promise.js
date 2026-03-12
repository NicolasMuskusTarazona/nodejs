const { error } = require("console");
const { readFile } = require("fs");
const {promisify} = require('util');
function getText(pathFile) {
    return new Promise(function (resolve, reject) {
    readFile("./data/first.txt", "utf-8", (err, data) => {
        // si pasa un error le pasa ese error a rechazo 
        if (err) {
            reject(err);
        }
        // si todo fue bien le va a pasar los datos a resuelto
        resolve(data)
    })
})}

// getText('./data/fourth.txt')
//     .then((result) => console.log(result))
//     .then(() => getText('./data/first.txt'))
//     .then(result => console.log(result))
//     .catch(error => console.log(error))


// async await ( mas facil que los codigos de arriba )
async function read(params) {
    try {
        const result = await getText('./data/first.txt')
        const result2 = await getText('./data/second.txt')
        const result3 = await getText('./data/third.txt')
        const result4 = await getText('./data/newfile.txt')
        console.log(result)
        console.log(result2)
        console.log(result3)
        console.log(result4)
    } catch (error) {
        console.log(error)
    }
}

read()