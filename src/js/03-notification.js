import '../css/common.css';

/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

//* час, через скільки ми будемо закривати нотифікацію, в константі
const NOTIFICATION_DELAY = 3000;

//* вводимо змінну, для того, щоб був id для видалення сетаймауту
// todo null, бо початкове значення не оголошено(гарний тон)
let timeoutId = null;

const refs = {
  notification: document.querySelector('.js-alert'),
};

// console.log(refs.notification);

refs.notification.addEventListener('click', onNotificationClick);

//* запуск автоматичний нотифікації на сторінки
showNotification();

/*
 ! Функції
 */

//* при кліку, ховаємо нотифікацію
function onNotificationClick() {
  hideNotification();

  //* робимо видалення setTimeout за id(при кліку консоль вже не покажеться, бо видалили setTimeout)
  clearTimeout(timeoutId);
}

//* показ нотифікації (додаємо клас 'is-visible')
function showNotification() {
  refs.notification.classList.add('is-visible');

  //* Ставимо сетаймаут, з повідомленням через 2с, що закрваємо алерт, та закриваємо нотифікацію
  //* timeoutId присвоюємо setTimeout(для видалення по id)
  timeoutId = setTimeout(() => {
    console.log('Закриваємо алерт автоматично, щоб не висів');

    //* передаємо функцію закриття в сетаймаут, щоб автоматично закривалася через 2с.
    hideNotification();
  }, NOTIFICATION_DELAY);
}

//* ховаємо нотифікацію (видаляємо клас 'is-visible')
function hideNotification() {
  refs.notification.classList.remove('is-visible');
}
