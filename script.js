document.querySelector(".composer").addEventListener("submit",e=>e.preventDefault());
document.querySelectorAll(".actions button").forEach(b=>b.addEventListener("click",()=>b.animate(
[{transform:"scale(1)"},{transform:"scale(.88)"},{transform:"scale(1)"}],{duration:180})));
