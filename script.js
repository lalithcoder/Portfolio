/* TYPING EFFECT */

const text = [
  "Aspiring Software Engineer",
  "Full Stack Developer",
  "Machine Learning Enthusiast",
  "Problem Solver"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

  if(count === text.length){
    count = 0;
  }

  currentText = text[count];

  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if(letter.length === currentText.length){

    count++;
    index = 0;

    setTimeout(type, 1500);

  }else{

    setTimeout(type, 80);

  }

})();

/* NAV ACTIVE */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", ()=>{

  let current = "";

  sections.forEach(section=>{

    const sectionTop = section.offsetTop;

    if(scrollY >= sectionTop - 150){
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link=>{

    link.classList.remove("active");

    if(link.getAttribute("href").includes(current)){
      link.classList.add("active");
    }

  });

});

/* SCROLL ANIMATION */

const observer = new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el)=>observer.observe(el));

/* CURSOR GLOW */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";

});