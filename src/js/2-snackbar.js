// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
// const fulfilled = document.querySelector('input[value="fulfilled"]');
// const rejected = document.querySelector('input[value="rejected"]');
const state = document.querySelector('input[name="state"]');
const delayInput = document.querySelector('input[name="delay"]');

form.addEventListener('submit', event => {
  event.preventDefault();
  let delay = Number(delayInput.value);

  const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state.value === 'fulfilled') {
        resolve(
          iziToast.show({
            message: `✅ Fulfilled promise in ${delay}ms`,
            messageColor: '#FFFFF0',
            backgroundColor: 'green',
            position: 'topRight',
            progressBar: false,
            close: false,
          })
        );
      } else {
        reject(
          iziToast.show({
            message: `❌ Rejected promise in ${delay}ms`,
            messageColor: '#FFFFF0',
            backgroundColor: 'red',
            position: 'topRight',
            progressBar: false,
            close: false,
          })
        );
      }
    }, delay);
  });

  newPromise()
    .then(delay => {
      console.log(delay.value);
    })

    .catch(delay => {
      console.log(delay.value);
    });
});
