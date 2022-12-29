// const fs = require("fs");
// const { loadavg } = require("os");

const { fs } = require("fs");

// const quote = "No beauty shines brighter than that of a good heart !!!.";

// fs.writeFile("./awesome.html", quote, (err) => {
//     console.log("Completed writing !!!");
// });

// const quote2 = "Live more, worry Less";
// for (let i = 1; i <= 10; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//         console.log("Completed writing !!!");
//     });
// }

const [, , noOfFiles] = process.argv;
console.log(noOfFiles);

// for (let i = 1; i <= noOfFiles; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//         console.log("Completed writing !!!");
//     });
// }

// fs.readFile("./cool.txt", "utf-8", (err, data) => {
//     console.log(data);
// })

// fs.readFile("./cool.txt1", "utf-8", (err, data) => {
//     if (err) {
//         console.log("x", err);
//     } else {
//         console.log(data);
//     }
// })

// const quote3 = "Dream without fear, love without limits"

// fs.appendFile("./fun.html", "\n" + quote3, (err) => {
//     console.log("Completed appending!!!");
// });

// fs.unlink(`./delete-me.css`, err => {
//     console.log("Deleted Successfully");
// });