// array uzunligini qaytarsin,, agar bosh bo'lsa "bosh ekan" desin

// function arrLength(arr) {
//   if (arr.length == 0) {
//     return "bosh ekan";
//   } else {
//     return arr.length;
//   }
// }
// console.log(arrLength([1, "se", "th"]));
// console.log(arrLength([]));
// ==============================================================

// funcsion tuzing  unda argument sifatida array qabul qilsin
// oxirgi elementni qaytarsin

// function arrLast(arr) {
//   return arr[arr.length - 1];
// }
// console.log(arrLast([1, "se", "th"]));

// // ==============================================================

// // funcsion tuzing array va 1 ta element
// // array oxiriga shu elementni qo'shib bersin

// function arrE(arr, E) {
//   arr.push(E);
//   return arr;
// }
// console.log(arrE([1, 2, 3, "f", 5], "EE"));

// // ==============================================================

// // Birinchi ismni o'chirsin va oxiriga "Zuxra" ismini joylasin.
// // va mavjud bo'lgan ismar orasidan bitta ismni bor yoki yo'qligini tekshiradi.
// // Agar mavjuf bo'lsa birinchi va oxirgi tarfagi indeksalrini qaytarsin,
// // aks holda mavjud emas desin

let foydalanuvchilar = "Anvar, Sardor, Malika, Bekzod";

function proccesUsers(text, searchName) {
  let names = text.split(", ");
  names.shift(); //Birinchi "Anvarni" ni o'chiradi
  names.push("Zuxra"); //Oxiriga "Zuhra" ismini qo'shadi

  // natija: ['Sardor', 'Malika', 'Bekzod', 'Zuxra']"]

  if (names.includes(searchName)) {
    console.log("Birinchi indeksi:", names.indexOf(searchName));
    console.log("Oxirgi indeksi:", names.lastIndexOf(searchName));
  } else {
    console.log(`bunday ism topilmadi`);
  }
  return names;
}
console.log(proccesUsers(foydalanuvchilar, "Bekzod"));
