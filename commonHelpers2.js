import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as o}from"./assets/vendor-77e16229.js";const c=document.querySelector(".form");c.addEventListener("submit",t=>{t.preventDefault();let s=Number(t.currentTarget.delay.value);document.getElementById("delay");const r=document.getElementsByName("state"),a=Array.from(r).find(e=>e.checked).value;i(s,a).then(e=>{o.success({message:`Fulfilled promise in ${e}ms`,messageColor:"#FFFFF0",backgroundColor:"green",position:"topRight",progressBar:!1,close:!1})}).catch(e=>{o.error({message:`Rejected promise in ${e}ms`,messageColor:"#FFFFF0",backgroundColor:"red",position:"topRight",progressBar:!1,close:!1})});function i(e,l){return new Promise((n,m)=>{setTimeout(()=>{l==="fulfilled"?n(e):m(e)},e)})}});
//# sourceMappingURL=commonHelpers2.js.map