const hamburguer=document.querySelector("#hamburguer");  /*Estamos declarando la variable*/
const navLinks= document.querySelector(".nav-links");


hamburguer.addEventListener("click",() =>{
    navLinks.classList.toggle("active");
    const isOpen=navLinks.classList.contains("active");
    hamburger.innerHTML = isOpen ? '✕' : '☰';
});
