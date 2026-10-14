// const number = 2
// if (number === 0){
//     console.log("Тэг");
// }else if (number === Math.abs(number)){
//     console.log("Эерэг");
// }else {
//     console.log("Сөрөг");
// }

// const age = 20
// if (age <= 12) {
//     console.log("Хүүхэд");
// }else if (age >= 13 && age <=17) {
//     console.log("Өсвөр нас");
// }else {
//     console.log("Насанд хүрсэн");
// }

// let score = 188
// if (score >= 90 && score <=100) {
//     console.log("A");
// }else if (score >= 80 && score <=89) {
//     console.log("B");
// }else if (score >= 70 && score <=79) {
//     console.log("C");
// }else if (score >= 60 && score <=69) {
//     console.log("D");
// }else if (score >= 0 && score <=59) {
//     console.log("F");
// }else {
//     console.log("Буруу оноо");
// }

// let temp = -1
// if (temp < 0) {
//     console.log("Хүйтэн");
// }else if (temp >= 0 && temp <= 20) {
//     console.log("Сэрүүн");
// }else {
//     console.log("Дулаан");
// }

// let a = 14
// let b = 14
// if (a > b) {
//     console.log("Эхний тоо их");
// }else if (a < b) {
//     console.log("Хоёр дахь тоо их");
// }else {
//     console.log("Тэнцүү");
// }

// let total = 200000
// if (total < 100000) {
//     console.log(total);
// }else if (total >= 100000 && total < 200000) {
//     console.log(total - total / 100 * 10);
// }else {
//     console.log(total - total / 100 * 20);
// }

// let battery = 20
// if (battery == 0) {
//     console.log("Унтарсан");
// }else if (battery >= 1 && battery <= 19) {
//     console.log("Цэнэг бага");
// }else if (battery >= 20 && battery <= 99) {
//     console.log("Цэнэг хэвийн");
// }else if (battery == 100) {
//     console.log("Бүрэн цэнэгтэй");
// }else {
//     console.log("Буруу утга");
// }

// let color = "yellow"
// if (color == "red") {
//     console.log("Зогс");
// }else if (color == "yellow") {
//     console.log("Хүлээ");
// }else if (color == "green") {
//     console.log("Яв");
// }else {
//     console.log("Буруу өнгө");
// }

// let distance = 0
// if (distance > 0 && distance <= 3) {
//     console.log("3000 төгрөг");
// }else if (distance >= 4 && distance <= 10) {
//     console.log("5000 төгрөг");
// }else if (distance > 10) {
//     console.log("8000 төгрөг");
// }else {
//     console.log("Буруу зай");
// }

// let secret = 7
// let guess = 9
// if (secret == guess) {
//     console.log("Зөв таалаа!");
// }else if (secret < guess) {
//     console.log("Илүү бага тоо сонгоорой");
// }else {
//     console.log("Илүү их тоо сонгоорой");
// }

// let number = 15
// if (number % 5 == 0) {
//     console.log("yes!");
// }else {
//     console.log("no.");
// }

// let number = 14
// if (number % 2 == 0) {
//     console.log("even!");
// }else {
//     console.log("odd.");
// }

// let number = 1
// if (number % 3 == 0 && number % 5 == 0) {
//     console.log("FizzBuzz");
// }else if (number % 3 == 0) {
//     console.log("Fizz");
// }else if (number % 5 == 0) {
//     console.log("Buzz");
// }else {
//     console.log(number);
// }

// let number = 21423413
// if (number > 100) {
//     console.log(number = 100);
// }else {
//     console.log(number);
// }

// let number = -101
// if (Math.abs(number) % 2 == 1) {
//     console.log(number + 1);
// }else {
//     console.log(number);
// }

// let number = 1735
// let lastDigit = number % 10
// if (lastDigit == 1 || lastDigit == 6) {
//     console.log("Даваа");
// }else if (lastDigit == 2 || lastDigit == 7) {
//     console.log("Мягмар");
// }else if (lastDigit == 3 || lastDigit == 8) {
//     console.log("Лхагва");
// }else if (lastDigit == 4 || lastDigit == 9) {
//     console.log("Пүрэв");
// }else if (lastDigit == 5 || lastDigit == 0) {
//     console.log("Баасан");
// }

// let day = 7
// switch (day) {
//     case 1:
//         console.log("Monday");
//     break;
//     case 2:
//         console.log("Tuesday");
//     break;
//     case 3:
//         console.log("Wednesday");
//     break;
//     case 4:
//         console.log("Thursday");
//     break;
//     case 5:
//         console.log("Friday");
//     break;
//     case 6:
//         console.log("Saturday");
//     break;
//     case 7:
//         console.log("Sunday");
//     break;
//     default:
//         console.log("Буруу дугаар");
// }

// let a = 6
// let b = 3
// let c = 4
// if (a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0 ) {
//     console.log("Yes!");
// }else {
//     console.log("No");
// }

// let year = 2024
// if (year >= 1896 && year % 4 == 0) {
//     console.log("Зуны олимпийн жил");
// }else {
//     console.log("Зуны олимпийн жил биш");
// }

// let year = 2026
// if (year >= 1924 && year <= 1992 && year % 4 == 0) {
//     console.log("Өвлийн олимпийн жил");
// }else if (year >= 1994 && (year) % 4 == 2) {
//     console.log("Өвлийн олимпийн жил");
// }else {
//     console.log("Өвлийн олимпийн жил биш");
// }

// let month = 13
// switch (month) {
//     case 1:
//     case 2:
//     case 12:
//         console.log("Winter");
//     break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("Spring");
//     break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("Summer");
//     break;
//     case 9:
//     case 10:
//     case 11:
//         console.log("Autumn");
//     break;
//     default:
//         console.log("Буруу сарын дугаар");
// }

// let fuelType = "D"
// let litre = 14
// if (fuelType == "92") {
//     console.log(litre * 5500);
// }else if (fuelType == "95") {
//     console.log(litre * 7000);
// }else if (fuelType === "D") {
//     console.log(litre * 6000);
// }

// let a = 9
// let b = 10
// let c = 3
// console.log(a > b && b > c);

// let a = 3
// let b = 3
// let c = 3
// console.log(a == b && b == c);

// let a = 8
// let b = 1
// let c = 2
// console.log(a % 2 == 0 && b % 2 == 0 && c % 2 == 0);

// let a = -3
// let b = 2
// let c = 2
// console.log(a < 0 || b < 0 || c < 0);

// let number = 15
// let a = number % 10
// let b = (number - a) / 10
// if (number >= 10 && number <= 99) {
//     console.log(a * 10 + b);
// }

// let number = 87
// let a = number % 10
// let b = (number - a) / 10
// if (number >= 10 && number <= 99) {
//     console.log(a * b);
// }



// let year = 2400;
// if (year % 400 == 0) {
//   console.log("Өндөр жил");
// } else {
//   console.log("Өндөр жил биш");
// }



let elapsed = Date.now() / 10;
let dooli = elapsed % 100;
let sec = ((elapsed - dooli) / 100) % 60;
let min = (((elapsed - dooli) / 100 - sec) / 60) % 60;
let hour = ((((elapsed - dooli) / 100 - sec) / 60 - min) / 60) % 24;
let day = (((((elapsed - dooli) / 100 - sec) / 60 - min) / 60 - hour) / 24) % 30;
let dayuld = ((((((elapsed - dooli) / 100 - sec) / 60 - min) / 60 - hour) / 24) - day)
let yearsuld = dayuld % 365
let years = (dayuld - yearsuld) / 365
let monthuld = yearsuld % 30 
let month= (yearsuld - monthuld) / 30
console.log(`${years} жил ${month} сар ${day} өдөр ${hour} цаг ${min} минут ${sec} секунд ${Math.floor(dooli)} дооль`);



// let a = 0
// let b = 2
// let c = 1
// if (a < b && a < c) {
//     console.log(a);
// }else if (b < a && b < c) {
//     console.log(b);
// }else {
//     console.log(c);
// }



// let a = 3
// let b = 9
// let c = 6
// if (a < b && a < c && c > b) {
//     console.log(c - a);
// }else if (a < b && a < c && b > c) {
//     console.log(b - a);
// }else if (b < c) {
//     console.log(c - b);
// }else {
//     console.log(b - c);
// }