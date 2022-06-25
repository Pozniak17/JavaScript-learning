import '../css/common.css';

//* бібліотека для нативного JS, щоб працювати з Бутстрапом
import BSN from 'bootstrap.native';

//* ініціалізація плагіна модального вікна, який прив'язуєється до розмітки
const modal = new BSN.Modal('#subscription-modal');

console.log(modal); //* посилання на модальне вікно

//* метод виклику модального вікна з документації
modal.show();

// todo надоїдалка

const refs = {
  modal: document.querySelector('#subscription-modal'),
  subcribeBtn: document.querySelector('button[data-subscribe'),
};

// //* проміжок часу, коли треба задовбувати
const PROMPT_DELAY = 1000;
// //* кількість разів, скільки треба задовбувати
const MAX_PROMPT_ATTEMPS = 3;
//* promptCounter нам потрібен для того, щоб лічив кількість інтервалів, щоб виконати перевірку
let promptCounter = 0;
let hasSubscribed = false;

//* при завантаженні сторінки запускаємо
openModal();

//todo ставимо костомну подію,кожен раз коли на кнопку закрити натискаємо, запускається кастомна подія openModal() і так по колу;
refs.modal.addEventListener('hide.bs.modal', openModal);

//! при кнопці Подписаться, закриваємо модалку. Також вказуємо, що при кліку на "Подписаться", hasSubscribed = true(користувач підписується)
refs.subcribeBtn.addEventListener('click', onSubscribeBtnClick);

function openModal() {
  //* виклик модального вікна через 3с.
  //* кажемо, якщо поточне значення promptCounter === 3, або ж коли людина підписалася то зупиняємо і виходимо
  if (promptCounter === MAX_PROMPT_ATTEMPS || hasSubscribed) {
    console.log('Максимальна кількість надоїданій або підписався');
    return;
  }
  setTimeout(() => {
    console.log('Відчиняємо надоїдалку');
    modal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
}

function onSubscribeBtnClick() {
  hasSubscribed = true;
  modal.hide();
}

//! Задача 1
//* присвоюємо intervalId в змінну, для того щоб, очистити через clearInterval()
// const intervalId = setInterval(() => {
//* кажемо, якщо поточне значення promptCounter === 3, або ж коли людина підписалася то зупиняємо і виходимо
//* також очищуємо інтервал
//   if (promptCounter === MAX_PROMPT_ATTEMPS || hasSubscribed) {
//     console.log('Запунити інтервал');
//     clearInterval(intervalId);
//     return;
//   }
//   console.log('Підпишися на розсилання! - ' + Date.now());
//   promptCounter += 1;
// }, PROMPT_DELAY);
