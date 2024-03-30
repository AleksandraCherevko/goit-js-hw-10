import{f as h,i as p}from"./assets/vendor-77e16229.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const n=document.querySelector("[data-start]"),a={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let l=Date.now();n.disabled=!1;let y=Date.now(),d=null;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<y?(p.show({message:"Please choose a date in the future",messageColor:"#FFFFF0",backgroundColor:"#FF4500",position:"topRight",progressBar:!1,close:!1,iconUrl:"../img/close-outline (1) (1).svg",iconColor:"red"}),n.disabled=!0):(n.disabled=!1,l=t[0].getTime())}};h('input[type="text"]',g);function b(t){const o=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:i,minutes:f,seconds:m}}function u(t){return String(t).padStart(2,"0")}function S(){d=setInterval(()=>{const t=l-Date.now();if(t<0){clearInterval(d),n.disabled=!0;return}n.disabled=!0,C(b(t))},1e3)}n.addEventListener("click",S);function C({days:t,hours:r,minutes:c,seconds:s}){a.days.textContent=u(t),a.hours.textContent=u(r),a.minutes.textContent=u(c),a.seconds.textContent=u(s)}
//# sourceMappingURL=commonHelpers.js.map
