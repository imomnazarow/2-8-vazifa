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

// 44.Funksiyagaismvafamiliyaargumentqilibberilsa,funksiya
// “ism,familiya”formatdagistringqaytarsin.
// Namuna:
// ismFam("First","Last") "Last, First"
function ismFam(ism, familiya) {
  return `${ism}, ${familiya}`;
}
console.log(ismFam("Saidolim", "Imomnazarov"));

// 45.Quyidaganamunanikuzatganholdafunksiyayasang.
// Namuna:
// bug(true) "sad days"
// bug(false) "it's a good day

function bug(boolean) {
  if (boolean === true) {
    return "sad days";
  } else if (boolean === false) {
    return "It's a good day";
  }
}
console.log(bug(false));

// 46.Shundayfunksiyayasangki,ushbufunksiya2taargument
// qabulqiladi. Birinchiargumentmassive, ikkinchiargument
// ushbumassivniboshidanboshlabnechtaelementnitushurib
// qoldirish. Tushiribqoldirilgandanso’ng funksiyanatijani
// qaytarsin. // Namuna:
// tushirMassiv([1, 2, 3], 1) [2, 3]

function tushirMassiv(arr, tushirishSoni) {
  return arr.slice(tushirishSoni);
}

console.log(tushirMassiv([1, 2, 3], 1));

// 47.Funksiyaargumentsifatidaovozberibqo’llabquvvatlashlar
// sonivaovozberibqo’llamaganlarsoniniqabulqiladi.Funksiya
// natijaniqaytarsin. Namuna:
// ovozlar({upvotes:13,downvotes:0}) 13
// ovozlar({upvotes:2,downvotes:33})-31

function ovozlar(ovozObj) {
  return ovozObj.upvotes - ovozObj.downvotes;
}

console.log(ovozlar({ upvotes: 13, downvotes: 0 }));
console.log(ovozlar({ upvotes: 2, downvotes: 33 }));

// 48.Funksiyasonqabulqilsa, ushbusonningnegativiniqay
// tarsin. Namuna:
// negativ(4)-4
function negativ(son) {
  return -son;
}
console.log(negativ(-4));

// 49.Massivni elementlarini o’rninalmashtiradigan funksiya
// yasang.Reversemetodisizhamurinibko’ring.
// Namuna:
// almash([1,2,3, 4]) [4,3,2,1]

function almash(arr) {
  let yangiArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    yangiArr.push(arr[i]);
  }

  return yangiArr;
}

console.log(almash([1, 3, 4, 5]));

// 50.Kinoteatrga bollar kino ko’rgani kirmoqchi bunda 2ta talab
// mavjud. Shunda funksiya 2ta argument qabul qiladi. Bolaning
// yoshini va ota-onasi bilan birgami degan boolean qiymat. Agar
// bolaning yoshi kamida 15 bo’lsa va ota-onasi bilan birga bo’lsa
// funksiya true qaytarsin aks holda false.Namuna:
// kinogaKirish(14, true)
// kinogaKirish(14, false)
// true
// false
// kinogaKirish(16, false)
// true
function kinogaKirish(yosh, otaOna) {
  if (yosh >= 15 && otaOna === Boolean(true)) {
    return true;
  } else {
    return false;
  }
}
console.log(kinogaKirish(15, true));

// 51.Quyidagi namunalarda kamchilik bor funksiya aslida har
// bir massivning elementiga 1 qo’shishi kerak. Funksiya to’g’ri
// yasang.
// Namuna:
// oshir1ga([0, 1, 2, 3])
// oshir1ga([2, 4, 6, 8])
// [1, 2, 3, 4]
// [3, 5, 7, 9]
// oshir1ga([-1,-2,-3,-4])
// [0,-1,-2,-3]

function oshir1ga(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 1;
  }

  return arr;
}

console.log(oshir1ga([0, 1, 2, 3]));

// 52.Template string yordamida ya’ni backticlar orqali “ ushbu
// formatdagi stringni hosil qiling.
// var ism = "Donyor";
// var familiya = "Olimov";
// var natija;-> sizning kodingiz.
// Natija: “Donyor Olimov” ko’rinishida bo’lsin.

let ism = "Donyor";
let familiya = "Olimov";
let natija = `${ism} ${familiya}`;

console.log(natija);

// 53.Quyidagi namunani ternary operator ko’rinishida yozing.
// Ternary operatorga misol:
// 2===2 ? 'teng' : 'tengemas'
// Namuna:
// var holatiYaxshimi = true
// var holati;
// if (holatiYaxshimi)
// holati = "yaxshi"
// else
// holati = "yaxshi emas"
// Yuqoridagi kodni ternary operator ko’rinishiga o’giring!.

// ??????????????????????????????????????????????????????????????

// 54.Funksiya string qabul qiladi. Agar ushbu stringning uzunligi.
// juft bo’lsa funksiya true qaytarsin, aks holda false
// function sozUzunligi(str) {
// // code...
// }
// Namuna:
// sozUzunligi("apples") true
// //applesda6tabelgiqatnashgan,6esajuftson.
// sozUzunligi("pears") false
// sozUzunligi("cherry") true

function sozUzunligi(str) {
  return str.length % 2 === 0;
}

console.log(sozUzunligi("apples"));

// 55.Funksiya2taargumentqabulqiladi. Ikkalaargumentham
// son, funksiya1-sonni2-songadarajagako’tarilganqiymatni
// qaytarsin.
// functiondaraja(x,y){
// //code...
// }
// Namuna:
// daraja(5,5) 3125
// daraja(10,10) 10000000000
// daraja(3,3) 27

function daraja(x, y) {
  return x ** y;
}

console.log(daraja(5, 5));

// 56.Funksiyamassivqabulqiladi.Ushbufunksiyamassivning
// so’nggielementiniqaytaribbersin.
// functionsongiElement(arr){
// //code...
// }
// Namuna:
// 27
// DASTURLASHDANMASALALAR
// songiElement([1,2,3]) 3
// songiElement(["cat","dog","duck"]) "duck"
// songiElement([true,false,true]) true

function songiElement(arr) {
  return arr[arr.length - 1];
}
console.log(songiElement([1, 2, 3]));
console.log(songiElement(["cat", "dog", "duck"]));

// 57.Kabisayilinianiqlaydiganfunksiyayasang.Agarkiritilgan
// yilkabisabo’lsafunksiyatrueqaytaradi,aksholdafalse.Kabisa
// yili4gabo’linadiganyilbo’lib, lekin100gabo’linsauholda
// 400gahambo’linganidaginakabisahisoblanadi.
// functionkabisa(yil){
// //code...
// }
// Namuna:
// kabisa(2020) true
// kabisa(2021) false
// kabisa(1968) true

function kabisa(yil) {
  return yil % 4 === 0 && (yil % 100 !== 0 || yil % 400 === 0);
}

console.log(kabisa(2020));

// 58.Funskiyaga so’zkiritilsa funksiyaushbuso’zni birinchi
// harfisizqaytaribbersin.
// functionsoz(word){
// //code...
// }
// Namuna:
// soz("apple") "pple"
// soz("cherry") "herry"
// soz("plum") "lum"

function soz(word) {
  return word.slice(1);
}

console.log(soz("apple"));
console.log(soz("cherry"));
console.log(soz("plum"));

// 59.Boolenqiymatiniteskarisiniqaytaribberadiganfunksiya
// yasang.
// functionteskariBool(bool){
// //code...
// }
// Namuna:
// flipBool(true) false
// flipBool(false) true

function teskariBool(bool) {
  return !bool;
}

console.log(teskariBool(true));
console.log(teskariBool(false));

// 60.Funskiyasonqabulqiladi,agarsonjuftbo’lsafunskiya“juft”
// qaytaradi,agartoqbo’lsa“toq”qaytarsin.
// functionjuftMiToqmi(son){
// //code...
// }
// Namuna:
// juftMiToqmi(3) "toq"
// juftMiToqmi(146)
// juftMiToqmi(19)
// "juft"
// "toq"

function juftMiToqmi(son) {
  if (son % 2 === 0) {
    return "juft";
  } else {
    return "toq";
  }
}

console.log(juftMiToqmi(3));
console.log(juftMiToqmi(146));
console.log(juftMiToqmi(19));

// 61.Quyidagi rasmga muvofiq qutilar teriladi. Qutilarning
// qavatiga qarab ularning soni oshib boradi.

function qutilar(qavat) {
  let natija = 0;

  for (let i = qavat; i > 0; i--) {
    if (i === qavat) {
      natija += i;
    } else {
      natija += i * 2;
    }
  }

  return natija;
}

console.log(qutilar(4));

// 62.Funskiya massiv qabul qiladi, ushbu massivni ichida yoki
// stringlar yoki numberlar joyshlashgan bo’ladi. funksiya massiv
// elementlarini bitta string qilib qaytarsin.
// function arrayToString(arr) {
// // code...
// }
// Namuna:
// arrayToString([1,2,3,4,5,6]) "123456"
// arrayToString(["a","b","c","d","e","f"])
// "abcdef"
// arrayToString([1,2,3,"a","s","dAAAA"])
// "123asdAAAA"

function arrayToString(arr) {
  return arr.join("");
}

console.log(arrayToString([1, 2, 3, 4, 5, 6]));

// 63.Funksia2tasonlardaniboratmassivqabul qilsa, ularni
// birlashtiribbittamassivko’rinishidaqaytaribbersin.
// functionbirlash(arr1,arr2){
// //code...
// }
// Namuna:
// birlash([1,3,5],[2,6,8]) [1,3,5,2,6,8]
// birlash([7,8],[10,9,1,1,2]) [7,8,10,9,1,
// 1,2]
// birlash([4,5,1],[3,3,3,3,3]) [4,5,1,3,
// 3,3,3,3]

function birlash(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(birlash([1, 3, 5], [2, 6, 8]));

// 64.Funskiya2taargumentqabulqiladi. 1-argumentmassiv,
// 2-argumentushbumassivningbironelementi.Funksiyaushbu
// elementningmassivichidanechinchiindexdaturishiniqaytarib
// bersin.
// functiontopIndex(arr,str){
// //code...
// }
// Namuna:
// topIndex(["hi","edabit","fgh","abc"],"fgh") 2
// topIndex(["Red","blue","Blue","Green"],"blue")
// 1

function topIndex(arr, str) {
  return arr.indexOf(str);
}
console.log(topIndex(["hi", "edabit", "fgh", "abc"], "fgh"));

// 65.Funksiyamassivebilanindexqabulqilsa,ushbuindexdagi
// massivelementiniqaytarsin.
// !!! Indexniengkichikqiymatgaqarabyaxlitlang.
// functionarrElement(arr,index){
// //code...
// }
// Namuna:
// arrElement([1,2,3,4,5,6],10/2) 6
// arrElement([1,2,3,4,5,6],8.0/2) 5
// arrElement([1,2,3,4],6.535355314/2) 4

function arrElement(arr, index) {
  return arr[Math.floor(index)];
}

console.log(arrElement([1, 2, 3, 4, 5, 6], 10 / 2));
console.log(arrElement([1, 2, 3, 4, 5, 6], 8.0 / 2));
console.log(arrElement([1, 2, 3, 4], 6.535355314 / 2));

// 66.Quyidaginamunanikuzatganholdafunksiyayasang.
// 32
// EDABIT
// Namuna:
// namuna([1, 2, 3, 4, 5])
// namuna([-1, 0, 1])
// 0
// 15
// namuna([0, 4, 8, 12])
// 24

function namuna(arr) {
  let summa = 0;

  for (let i = 0; i < arr.length; i++) {
    summa += arr[i];
  }
  return summa;
}
console.log(namuna([1, 2, 3, 4, 5]));

// 67.Funksiyaga son so’z ko’rinishida kiritilsa, raqam ko’rinishida
// qaytarilsin
// “bir”-> 1
// “ikki”-> 2
// “uch”-> 3
// “to’rt”-> 4
// “besh”-> 5
// “olti”-> 6
// “yetti”-> 7
// “sakkiz”-> 8
// “to’qqiz”-> 9
// “nol”-> 0
// Namuna:
// sozSon("bir")
// sozSon("ikki")
// sozSon("uch")
// 1
// 2
// 9
function sozSon(soz) {
  let sonlar = {
    nol: 0,
    bir: 1,
    ikki: 2,
    uch: 3,
    tort: 4,
    besh: 5,
    olti: 6,
    yetti: 7,
    sakkiz: 8,
    toqqiz: 9,
  };

  return sonlar[soz];
}

console.log(sozSon("bir"));
console.log(sozSon("ikki"));
console.log(sozSon("uch"));

// 68.Funskiyaga sonlar massivi beriladi, va 2-argument sifatida
// bitta son beriladi agar ushbu son massivniichidabo’lsa funksiya
// true qaytarsin, aks holda false
// 33
// DASTURLASHDANMASALALAR
// functionbormi(arr,son){
// //code...
// }
// Namuna:
// bormi([1,2,3,4,5],3) true
// bormi([1,1,2,1,1],3) false
// bormi([5,5,5,6],5) true
// bormi([],5) false
function bormi(arr, son) {
  return arr.includes(son);
}

console.log(bormi([1, 2, 3, 4, 5], 3));

// 69.Funskiyasonlarvastringlarmassiviberilsa,massivning
// ichidagisonlarnistringgao’girib,ushbumassivnifunksiyayana
// qaytaribbersin.
// functionsonString(arr){
// //code...
// }
// Namuna:
// sonString([1,2, "a","b"]) ["1","2","a","b"]
// sonString(["abc",123,"def",456]) ["abc","123",
// "def","456"]
// sonString([1,2, 3,17,24,3,"a","123b"]) ["1",
// "2","3","17","24","3","a","123b"]
// sonString([]) []

function sonString(arr) {
  let natija = [];

  for (let i = 0; i < arr.length; i++) {
    natija.push(String(arr[i]));
  }

  return natija;
}

console.log(sonString([1, 2, "a", "b"]));

// 70.Kubik rubik yasash uchun kubikchalar kerak bo’ladi.
// Funksiya kubik rubikni necha qatorligiga qarab turib,
// kubikchalar sonini qaytasinNamuna:
// kubikchalar(1)
// kubikchalar(2)
// kubikchalar(3)
// 6
// 24
// 54

function kubikchalar(qator) {
  return qator ** 2 * 6;
}
console.log(kubikchalar(5));
