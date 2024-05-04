// console.log("Hello World");
// const productOfTwoNumber = (a, b) => a * b;
// const student = {
//   name: "sid",
//   greet: () => {
//     console.log(`welcome ${this.name}`);
//   },
// };
// student.greet();

// Take an array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon]. Transform it into ['apple', 'oranges' , 'empty string', 'mango', 'empty string', 'lemon] using array maps

// const arr = ["apple", "oranges", "", "mango", "", "lemon"];
// const transformedArr = arr.map((a) => {
//   if (!a) return "empty string";
//   else return a;
// });
// console.log(transformedArr);

// const obj1 = { key1: 1, key2: 2 };
// const obj2 = { ...obj1, key1: 1000 };
// console.log(obj1);
// console.log(obj2);

// const obj1 = { key1: 1, key2: 2, key3: 1000 };
// const { key1, key3 } = { ...obj1 };
// console.log(key1, key3);

// const obj1 = { key1: 1, key2: 2, key3: 1000 };
// let { key1, key3 } = obj1;
// key1 = 20;
// key3 = 123;
// console.log(obj1.key1, obj1.key3);

// const output = async () => {
//   console.log("a");
//   console.log("b");
//   console.log(
//     await new Promise((resolve, reject) => {
//       setTimeout(() => resolve("c"), 3000);
//     })
//   );
//   console.log(
//     await new Promise((resolve, reject) => {
//       setTimeout(() => resolve("d"), 0);
//     })
//   );
//   console.log("e");
// };
// output();
