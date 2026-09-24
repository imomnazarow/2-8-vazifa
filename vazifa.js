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


