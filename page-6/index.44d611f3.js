const t=document.querySelector("h2"),e=document.querySelector("p"),n=document.querySelector("button"),o=()=>{(async()=>{const t=await fetch("https://api.adviceslip.com/advice",{method:"GET"});return await t.json()})().then((n=>{t.textContent=`"${n.slip.advice}"`,e.textContent=`ADVICE #${n.slip.id}`})).catch((e=>{t.textContent="Oops.. Something went wrong"}))};document.addEventListener("DOMContentLoaded",(()=>{t.textContent="loading...",e.textContent="",o()})),n.addEventListener("click",(()=>{t.textContent="loading...",e.textContent="",setTimeout((()=>{o()}),2e3)}));
//# sourceMappingURL=index.44d611f3.js.map
