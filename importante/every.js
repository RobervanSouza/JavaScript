//EVERY()
// [๐, ๐, ๐, ๐, ๐ฅ, ๐ณ, ๐].every(๐) -> false;// todos os elemento nรฃo e maรงรฃ

const data = [
    { name: "Matheus", age: 31, sallary: 2000, driverLicense: true },
    { name: "Joรฃo", age: 18, sallary: 1500, driverLicense: false },
    { name: "Mariana", age: 22, sallary: 4000, driverLicense: true },
    { name: "Pedro", age: 50, sallary: 7200, driverLicense: true },
    { name: "รrica", age: 16, sallary: 0, driverLicense: false },
];

console.log( data.every((user) => user.age > 13))