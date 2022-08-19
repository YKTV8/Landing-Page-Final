//DEFINE GLOBAL VARIBLE
const navBar = document.querySelectorAll('.navbar__menu');
const navListUL = document.querySelector('#navbar__list');
//const paraElems = documents.querySelectorAll('p');
let section = Array.from(document.querySelectorAll('section'));


//CONSTRUCT NAVBAR DYNAMICALLY

function buildNav() {
    for (let index = 0; index <Array.length; index++) {
        const element = Array[index];
    };
};

section.forEach(section=>{
    const navButton = document.createElement('li');
    navButton.insertAdjacentHTML("afterBegin",`<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
    navListUL.appendChild(navButton);

    buildNav(navButton, section);
});

//navBar.appendChild(navListUL);

window.addEventListener("scroll", function (z){``
section.forEach (function(section){
    const topOfSect = section.getBoundingClientRect().top;
    if(topOfSect >= 0 && topOfSect <350){
        section.classList.add('your-active-class');
    }else {section.classList.remove('your-active-class');
    }
    });
});

//CONFIRM VIEWPORT AND CREATING ACTIVE CLASS
const sectionInViewport = () =>{
    const sections = sections.getBoundingClientRect();
    return sections.top > 0 && sections.bottom < 150;
};

const activeSection = () => {
    for (let menu__link of sections){
        if (sectionInViewport(sections)) {
            if(!sections.classList.contains("your-active-class")) {
                sections.classList.add("your-active-class");
                sections.style.background.add(".active-section");
            }
      } else {
        sections.classList.remove("your-active-class");
      }
    }
};

//navBar.appendChild(navListUL);
function scrollBehavoir(navButton,sections){
    navButton,addEventListener('click', function(event){
        event.preventDefault();
        window.scrollIntoView({
            top: section.offsetTop,
            behavior: "smooth"
    })
})
};

//creating smooth scroll
scrollTo();

const smoothScroll = () =>{
    document.querySelectorAll('.menu__link').forEach((anchor)=> {
        anchor.addEventListener('scroll', function () {
            preventDefault ();
            document.querySelector(anchor.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
};
/*function smoothScroll (){
    sections.forEach(section =>{
        const sectionTop = section.getBoundingClientRect();
        const link = document.querySelectorAll(`a[href = "#${section.id}"]`)
    })

    activeSection()
}***

window.addEventListener("scroll" , function(){
    paraElems.forEach(function(paraElems){
        const pos = paraElems.getBoundingClientRect();
        const isInViewport = pos.top <= 150 && pos.top >= window.innerHeight;
    if (isInViewport) {
        paraElems.classList.add('active-section');
    }
    })
})*/

//BUILD THE NAVBAR

buildNav();

//SMOOTH SCROLL TO SECTION

smoothScroll();