const os = require("os");
// 1KB = 1024 bytes
// 1MB = 1024 KB
// 1GB = 1024 MB

console.log("Free Memory", os.freemem() / 1024 / 1024 / 1024);
// console.log("Total Memory", os.totalmem() / 1024 / 1024 / 1024);
// console.log("OS Version", os.version());
// console.log("CPU", os.cpus());