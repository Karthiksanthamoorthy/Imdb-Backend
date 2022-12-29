//console.log(global);
//console.log(window);
//console.log(document);

console.log(process.argv);//argument values

const [, , num] = process.argv;
const double = (n) => (n * 2);
console.log(double(10));
console.log(double(process.argv[2]));
console.log(double(num));

//process
