// Gurudev 007 Website
console.log("Welcome to Gurudev 007 Official");
console.log("Gurudev 007 Website Loaded");
window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>80){

nav.style.background="rgba(0,0,0,.95)";
nav.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

nav.style.background="rgba(0,0,0,.80)";
nav.style.boxShadow="none";

}

});
