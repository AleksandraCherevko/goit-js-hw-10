import"./assets/modulepreload-polyfill-3cfb730f.js";import{f,i as h}from"./assets/vendor-77e16229.js";const e=document.querySelector("[data-start]"),o={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let d=Date.now();e.disabled=!1;let y=Date.now(),u=null;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<y?(h.show({message:"❌ Please choose a date in the future",messageColor:"#FFFFF0",backgroundColor:"#FF4500",position:"topRight",progressBar:!1,close:!1}),e.disabled=!0):(e.disabled=!1,d=t[0].getTime())}};f('input[type="text"]',p);function g(t){const c=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:i,minutes:l,seconds:m}}function n(t){return String(t).padStart(2,"0")}function S(){u=setInterval(()=>{const t=d-Date.now();if(t<0){clearInterval(u),e.disabled=!0;return}e.disabled=!0,b(g(t))},1e3)}e.addEventListener("click",S);function b({days:t,hours:r,minutes:s,seconds:a}){o.days.textContent=n(t),o.hours.textContent=n(r),o.minutes.textContent=n(s),o.seconds.textContent=n(a)}
//# sourceMappingURL=commonHelpers.js.map
