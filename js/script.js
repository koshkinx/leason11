// 1) Напишіть функцію яка рахує кількість букв великого регістру в стрінгу і повертає кількість
// CountLowrercase("abc"); ===> 0
// CountLowrercase("abcABC123"); ===> 3
// CountLowrercase("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

let text = "w5*1-+aaaaa";

function lvl(up) {
  if (up.match(/[A-Z]/g) == null) {
    return "0";
  } else {
    return up.match(/[A-Z]/g).length;
  }
}
console.log(lvl(text));

// 2) Написати функцію яка видаляє всі тексктові символи з стрінга, а отриманні цифрові значення переводить в тип намбер та повертає його
// fclearString("hell5o wor6ld")  ======> 56

function lvl2(num) {
  return +num.replace(/[^0-9]/g, "");
}
console.log(lvl2("34sdfsd342"));

// 3) Створити інпут який отримує пін код ( це 4 цифрових значення). За допомогою регулярки перевітити чи валідний пін код ввів користувач
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

let input = document.querySelector("input");
let btn = document.querySelector(".btn");
let regPass = /\b\d{4}\b/;
btn.addEventListener("click", function () {
  console.log(
    regPass.test(input.value) ? "Пароль корректный" : "Пароль некорректный"
  );
});

// 4) Створити регулярку яка отримує адресс сторінки і повертає тільки адресс
// "https://prog.academy/?page=1" -->"https://prog.academy/"
let rrr = "https://prog.academy/?page=1";
function linkCutter(link) {
  return link.match(/^https?:\/{2}[a-z0-9.-]+\//);
}
console.log(linkCutter(rrr));
// 5) Створити функцію валідації юзернейма, імя може включати літери цифри, тире і нижьнє тире, довжина імя повина бути від 4 до 10 символів. Приклад: validateUsr('a') => false,
// validateUsr('p1pp1') => true, validateUsr('asd43_34') => true

function valiDate(userName) {
  return /[a-z0-9-_]{4,10}/gi.test(userName);
}

console.log(valiDate("a"));
console.log(valiDate("p1pp1"));
console.log(valiDate("asd43_34"));
