// 1
const str1 = "Hello";
const str2 = "world";
console.log(str1.concat(", ", str2, "!"));

// 2
const str3 = "I learn computer science!";
console.log(str3.replaceAll(" ", "_"));
// 3
console.log(str3.length);

// 4
const min = 8;
if (min >= 0 && min < 15) {
  console.log("Your number is in first quarter");
} else if (min >= 15 && min < 30) {
  console.log("Your number is in second quarter");
} else if (min >= 30 && min < 45) {
  console.log("Your number is in third quarter");
} else if (min >= 45 && min < 60) {
  console.log("Your number is in fourth quarter");
} else {
  console.log("Invalid input");
}
// 5
const lang = "English";
const daysEn = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const daysRu = [
  [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
];
if (lang === "English") {
  console.log(daysEn);
} else if (lang === "Russian") {
  console.log(daysRu);
} else {
  console.log("Please select language between English and Russian");
}
