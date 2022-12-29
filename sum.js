console.log(process.argv);//argument values


const [, , n1, n2] = process.argv;
const sum = (a , b) => a + b;
console.log(sum(+n1, n2));
