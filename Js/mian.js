let links = document.querySelectorAll(".nav-link");
let span = document.createElement("span");

links.forEach(link => {
    link.addEventListener('mouseenter', underline);
    //link.addEventListener('mouseout', hide);
});

function hide(){
    span.style.width = 0;
}

function underline(){
    span.classList.add("underline");
    document.body.appendChild(span);
    let linkstyle = this.getBoundingClientRect();
    span.style.width = `${linkstyle.width}px`;
    span.style.top = `${linkstyle.bottom}px`;
    span.style.left = `${linkstyle.left}px`;
}


