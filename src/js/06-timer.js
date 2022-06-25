import '../css/common.css';

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

//! пишемо Таймер

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;

    this.init();
  }

  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }
  start() {
    if (this.isActive) {
      return;
    }
    // ми хочемо зберегти час старту(незмінна)
    const startTime = Date.now();
    //якщо наш таймер не активний, то робимо активним
    this.isActive = true;

    this.intervalId = setInterval(() => {
      // поточний час(кожен раз новий)
      const currentTime = Date.now();
      // console.log('start -> currentTime', currentTime);

      // отримуємо різницю між поточним і стартовим часом в мілісекундах
      const deltaTime = currentTime - startTime;

      // різницю ми передаємо в функцію, яка рахує години хвилини, секунди. Записуємо в timeComponents. Деструктуризуємо.
      const time = this.getTimeComponents(deltaTime);
      //! вставляємо в нашу розмітку
      // приймає час, проходить через формулу яка перетворює мілісікунди в години, секунди, хвилини
      // updateClockface(time);

      this.onTick(time);
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }
  // функція отримує кількість мілісекунд в time і дивиться, скільки в них влізає годин, хвилин, секунд
  // додаємо метод pad, до днів, годин, секунд, щоби 0 перед початком з'явився.
  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }

  //* Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
  pad(value) {
    return String(value).padStart(2, '0'); //* 1 -> 01, 7 -> 07, 14 -> 14
  }
}

const timer = new Timer({
  onTick: updateClockface,
});

// timer.start();

refs.startBtn.addEventListener('click', timer.start.bind(timer));

refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

//  * - Принимает время в миллисекундах
//  * - Высчитывает сколько в них вмещается часов/минут/секунд
//  * - Возвращает обьект со свойствами hours, mins, secs
//  * - Адская копипаста со стека 💩

// //* функція отримує кількість мілісекунд в time і дивиться, скільки в них влізає годин, хвилин, секунд
// //* додаємо метод pad, до днів, годин, секунд, щоби 0 перед початком з'явився.
// function getTimeComponents(time) {
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { hours, mins, secs };
// }

// //* Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
// function pad(value) {
//   return String(value).padStart(2, '0'); //* 1 -> 01, 7 -> 07, 14 -> 14
// }

//* метод, який приймає години, хвилини, секунди і оновлює значення в інтерфейсі
function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}

// const timer = {
//   //* для видалення ід
//   intervalId: null,
//   //! для того щоб не було повторних кліків на кнопку старт
//   isActive: false,

//   //* якщо вже активний, то виходь
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     //* ми хочемо зберегти час старту(незмінна)
//     const startTime = Date.now();
//     //*якщо наш таймер не активний, то робимо активним
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       //* поточний час(кожен раз новий)
//       const currentTime = Date.now();
//       // console.log('start -> currentTime', currentTime);

//       //* отримуємо різницю між поточним і стартовим часом в мілісекундах
//       const deltaTime = currentTime - startTime;

//       //* різницю ми передаємо в функцію, яка рахує години хвилини, секунди. Записуємо в timeComponents. Деструктуризуємо.
//       const time = getTimeComponents(deltaTime);
//       //! вставляємо в нашу розмітку
//       //* приймає час, проходить через формулу яка перетворює мілісікунди в години, секунди, хвилини
//       updateClockface(time);
//       // console.log(`${hours}:${mins}:${secs}`);
//     }, 1000);
//   },
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   },
// };
