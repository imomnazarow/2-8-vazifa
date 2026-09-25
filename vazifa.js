// 31.Oddiymatematikamallarketma-ketligistringko’rinishida
// funksiyagaargumentsifatidaberiladi.Ushbufunksiyamatem
// atikifodanibajaribnatijaniqaytarsin.
function calc(str) {
  let arr = str.split(" ");

  let num1 = Number(arr[0]);
  let ishora = arr[1];
  let num2 = Number(arr[2]);

  if (ishora === "+") {
    return num1 + num2;
  } else if (ishora === "-") {
    return num1 - num2;
  } else if (ishora === "*") {
    return num1 * num2;
  } else if (ishora === "/") {
    return num1 / num2;
  } else {
    return "+, -, *, / amallaridan birini kiriting";
  }
}
console.log(calc("12 + 3"));
console.log(calc("12 - 3"));
console.log(calc("12 * 3"));
console.log(calc("12 / 3"));
//================================================================

// 32.Shunday funksiya yasangki, unda 2ta butun son argument
// qilib beriladi. Agar ushbu sonlardan birontasi 10ga teng bo’lsa
// yoki ularning yig’indisi 10ga teng bo’lsa funksiya rost qiymat
// qaytaradi. Aks hold yolg’on.
function teng10(str) {
  let arr = str.split(", ");

  let bir = Number(arr[0]);
  let ikki = Number(arr[1]);

  if (bir === 10 || ikki === 10 || bir + ikki === 10) {
    return 10;
  } else {
    console.log(false);
  }
}
console.log(teng10("10, 3"));

// 33.Mashina kilometriga 10litr benzin ichadi. Mashina doim
// yo’lga chiqishdan oldin kamida 100litr benzin bilan chiqadi.
// Agar masofa funksiyaga argument sifatida berilsa, ushbu ma
// sofaga chiqish uchun Mashina necha litr benzin bilan chiqishi
// keraglini funksiya qaytarib bersin.

function litrMasofa(km) {
  if (km < 100) {
    return "benzin yetarli";
  } else if (km === 100) {
    return "benzin arang yetadi";
  } else {
    return km / 10;
  }
}
console.log(litrMasofa(105), "litr benzin kerak");

// 34.Quyidaginamunaganazartashlaganholdafunksiyayasang.
// Namuna:
// fun(3,7) 7
// fun(-1,0) 0
// fun(1000,400) 1000

function fun(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(fun(1000, 444));

// 35.Funksiya2taargumentberilsa, funksiyaanashu2taargu
// mentdaniboratmassivqaytarsin.
// Namuna:
// arr(1,2) [1,2]
// arr(51,21) [51,21]
// arr(512124,215) [512124,215]
function arr(x, y) {
  return [x, y];
}
console.log(arr(1, 5));

// 36.Funksiyaga2taargumentsifatidastringko’rinishidagima’lu
// motlarberiladi.Agarushbuikkalastringdagibelgilarsonibir
// birinikigatengbo’lsafunksiyarostqiymatqaytarsin,aks olda yolg’on.
function tengStrings(str1, str2) {
  if (str1.length == str2.length) {
    return true;
  } else {
    return false;
  }
}

console.log(tengStrings("hnk", "uhg"));

// 37.Shundayfunksiyayasangki, ungastringargumentqilib
// beriladi,agarushbustringbo’shbo’lsafunksiyatrueqaytaradi,
// aksholdafalse.
// Namuna:
// boshStr("") true
// boshStr("") false
// boshStr("a") false

function boshStr(str) {
  if (str === "") {
    return true;
  } else {
    return false;
  }
}

console.log(boshStr(""));

// 38.Shundayfunksiyayasang.Undabutunsonargumentqilib
// beriladi. Agarushbubutunson5gabo’linsa, funksiyatrue
// qaytarsin,aksholdafalse.

function bolinsin5(son) {
  if (son % 5 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(bolinsin5(-55));

// 39.Shundayfunksiyayasang.Undabutunsonargumentqilib
// beriladi.Agarushbubutunson100gabo’linsa,funksiyatrue
// qaytarsin,aksholdafalse.

function bolinsin100(son) {
  if (son % 100 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(bolinsin100(-1000));

// 40.Shundayfunksiyayasangki,ushbufunksiyastringniichida
// nechtabelgiborliginiaytsin.Bundalengthpropertisidanfoydalan
// mangvarekursivfunksiyaishlating.
// Namuna:
// uzunlik("apple") 5
// uzunlik("make") 4

function uzunlik(str) {
  if (str === "") {
    return 0;
  }

  return 1 + uzunlik(str.slice(1));
}

console.log(uzunlik("make"));

// 41.Funksiya2taargumentqabulqiladi. Birinchiargument
// ikkinchiargumentdankattaemas.Agarbirinchiargumentni
// ikkinchisigabo’linsa,funksiyatrueqaytaradiaksholdafalse
// Namuna:
// bolinsin(98,7) true
// //98/7=14
// bolinsin(85,4) false
function bolinsin(x, y) {
  if (x % y === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(bolinsin(98, 7));

// 42.Funksiyagaraqamstringko’rinishidaberilsa,funksiyaushbu
// ma’lumotniyanaraqamma’lumotturiko’rinishidaqaytarib
// bersin.
function raqam(str) {
  return Number(str);
}
console.log(raqam("676"));

// 43.To’rtburchakningyuzini hisoblaydigan funksiyayasang.
// Bundafunksiyagato’rtburchakning(ya’nito’g’riturtburchak)
// tomonlariberiladi. Funksiyauningyuziniqaytarishikerak,
// agartomonlarxatokiritilganbo’lsafunksiya-1qaytarsin.
function tortYuzi(a, b) {
  if (a > 0 && b > 0) {
    return a * b;
  } else {
    return -1;
  }
}
console.log(tortYuzi(3, 4));
