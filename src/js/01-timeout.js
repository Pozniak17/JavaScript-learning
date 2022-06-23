import '../css/common.css';

/*
 ! Метод window.setTimeout(callback, delay, args)
 */

// const logMessage = () => {
//   console.log('Лог при виклику callback-функції через 3 секунди');
// };

// console.log('До виклику setTimeout');

//* передаємо аргументи для виклику третім, четвертим аргументом, x = 5
// setTimeout(
//   x => {
//     console.log(x);
//     console.log('1 -Всередині callback для setTimeout');
//   },
//   2000,

//* аргумент який піде в x
//   5
// );

//* передаємо аргументи для виклику третім, четвертим аргументом, y = 50
// setTimeout(
//   y => {
//     console.log(y);
//     console.log('2 -Всередині callback для setTimeout');
//   },
//   1000,

//* аргумент який піде в y
//   50
// );

// console.log('Після виклику setTimeout');

//* приклад з циклом, спочатку пройде весь синхронний код, а потім виконається setTimeout, що вижче👆
// for (let index = 0; index < 10000; index++) {
//   console.log(index);
// }

//! Очистка таймаута з clearTimeout(timeoutId)

// const logger = time => {
//   console.log(`Лог через ${time}ms, тому що не відмінили таймаут`);
// };

//* третій аргумент 3000, йде в time, що вижче👆
// const timerId = setTimeout(logger, 2000, 3000);

//* це як id сетаймаута
// console.log(timerId);

//* довільна функція, показує true або false
// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

//* передаємо в clearTimeout() ідентифікатор, якщо logger = true, setTimeout не виконається
// if (shouldCancelTimer) {
//   clearTimeout(timerId);
// }
