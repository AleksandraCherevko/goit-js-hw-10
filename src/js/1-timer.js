import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('[data-start]');
const refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let userSelectedDate = Date.now();
startBtn.disabled = false;
let currentTime = Date.now();
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] < currentTime) {
      iziToast.show({
        message: 'Please choose a date in the future',
        messageColor: '#FFFFF0',
        backgroundColor: '#FF4500',
        position: 'topRight',
        progressBar: false,
        close: false,
        iconUrl: '../img/close-outline (1) (1).svg',
        iconColor: 'red',
      });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
      userSelectedDate = selectedDates[0].getTime();
    }
  },
};

flatpickr('input[type="text"]', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function start() {
  timerId = setInterval(() => {
    const countdown = userSelectedDate - Date.now();

    if (countdown < 0) {
      clearInterval(timerId);
      startBtn.disabled = true;
      return;
    }
    startBtn.disabled = true;
    updateTimerInterface(convertMs(countdown));
  }, 1000);
}

startBtn.addEventListener('click', start);

function updateTimerInterface({ days, hours, minutes, seconds }) {
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}
