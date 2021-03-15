let links = document.querySelectorAll("header .nav-item");
let span = document.createElement("span");

links.forEach(link => {
    link.addEventListener('mouseenter', underline);
    link.addEventListener("mouseleave", hide);
});

function hide(){
    span.style.transform = 'scaleX(0)';
}

function underline(){
    span.classList.add("underline");
    document.body.appendChild(span);
    let linkstyle = this.getBoundingClientRect();
    span.style.width = `${linkstyle.width}px`;
    span.style.left = `${linkstyle.left}px`;
    span.style.top = `${linkstyle.bottom + window.scrollY}px`;
    span.style.transform = 'scaleX(1)';
}


let menu = document.querySelector('.menu');

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    menu.style.top = "75px";
  } else {
    menu.style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}