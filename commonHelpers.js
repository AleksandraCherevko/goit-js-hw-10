import{f,i as m}from"./assets/vendor-77e16229.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const n=document.querySelector("button[data-start]");document.querySelector("[data-days]");document.querySelector("[data-hours]");document.querySelector("[data-minutes]");document.querySelector("[data-seconds]");document.querySelector(".timer");let a=Date.now();n.disabled=!1;let h=Date.now();const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){console.log(o[0]),o[0]<a?(m.show({message:"Please choose a date in the future",messageColor:"#FFFFF0",backgroundColor:"#FF4500",position:"topRight",progressBar:!1,close:!1}),n.disabled=!0):n.disabled=!1}};f('input[type="text"]',y);function i(o){const t=Math.floor(o/864e5),r=Math.floor(o%864e5/36e5),u=Math.floor(o%864e5%36e5/6e4),d=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:r,minutes:u,seconds:d}}console.log(i(2e3));console.log(i(14e4));console.log(i(2414e4));n.addEventListener("click",()=>{const o=a-h;console.log(o),globalThis.convertMs(o)});
//# sourceMappingURL=commonHelpers.js.map
