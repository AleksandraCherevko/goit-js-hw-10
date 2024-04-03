// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  let delay = Number(event.currentTarget.delay.value);

  const delayInput = document.getElementById('delay');
  const stateInputs = document.getElementsByName('state');

  const selectedState = Array.from(stateInputs).find(
    input => input.checked
  ).value;

  createNotification(delay, selectedState)
    .then(delay => {
      iziToast.success({
        message: `Fulfilled promise in ${delay}ms`,
        messageColor: '#FFFFF0',
        backgroundColor: 'green',
        position: 'topRight',
        progressBar: false,
        close: false,
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `Rejected promise in ${delay}ms`,
        messageColor: '#FFFFF0',
        backgroundColor: 'red',
        position: 'topRight',
        progressBar: false,
        close: false,
      });
    });

  function createNotification(delay, state) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });
  }
});
