// Loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("hide");
  setTimeout(()=>loader.style.display="none",700);

  // Reveal hero content
  document.querySelector(".hero-content").classList.add("active");
});

// Mobile Nav
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));

// Back To Top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll",()=>{backToTop.style.display=window.scrollY>400?"block":"none";});
backToTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

// Contact Form Toast
const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");
form.addEventListener("submit", e=>{
  e.preventDefault();
  toast.classList.add("show");
  form.reset();
  setTimeout(()=>toast.classList.remove("show"),3000);
});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("active");
  });
},{threshold:0.2});
reveals.forEach(el=>revealObserver.observe(el));

// Typed Hero Text
const words = ["Digital Experiences","Scalable Solutions","Modern Interfaces","Powerful Brands"];
let i=0,j=0,deleting=false;
const typed=document.getElementById("typed");
function typeEffect(){
  let current=words[i];
  if(!deleting){
    typed.textContent=current.slice(0,++j);
    if(j===current.length) deleting=true;
  }else{
    typed.textContent=current.slice(0,--j);
    if(j===0){deleting=false;i=(i+1)%words.length;}
  }
  setTimeout(typeEffect,deleting?60:120);
}
typeEffect();
