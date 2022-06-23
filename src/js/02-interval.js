//! Метод setInterval(callback, delay, args)

// const logger = time => console.log(`Лог кожні ${time}ms - ${Date.now()}`);

// console.log('До виклику setInterval');

//* третій аргумент 2000 йде в time вище👆, кожні 2с викликає функцію logger()
// setInterval(logger, 2000, 2000);

// console.log('Після виклику setInterval');

//! Очистка інтервалу з clearInterval(intervalId)

//* третій аргумент 2000 йде в time вище👆, кожні 2с викликає функцію logger()
// const intervalId = setInterval(logger, 2000, 2000);

//* довільна функція, показує true або false
// const shouldCancelInterval = Math.random() > 0.3;
// console.log(shouldCancelInterval);

//* передаємо в clearTimeout() ідентифікатор, якщо logger = true, setInterval не виконається
// if (shouldCancelInterval) {
//   clearInterval(intervalId);
// }

// console.log('До виклику setTimeout');

// setTimeout(() => {
//   console.log('виклик відкладеної функції 1');
// }, 1000);

// setTimeout(() => {
//   console.log('виклик відкладеної функції 2');
// }, 2000);

// console.log('Після виклику setTimeout');

//todo сетаймаути при однаковому часу, виконуюються в тому порядку в якому вони заплановані, спочатку 1-функція, потім 2-функція
