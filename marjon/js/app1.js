//DEFINE GLOBAL VARIBLE
const navBar = document.querySelector('.navbar__menu');
const  navListUL = document.querySelector('#navbar__list');
//const paraElems = documents.querySelectorAll('p');
let section = Array.from(document.querySelectorAll('section'));

//CONSTRUCT NAVBAR DYNAMICALLY

function buildNav() {
    for (let index = 0; index <Array.length; index++) {
        const element = Array[index];
    }
}

//CONFIRM VIEWPORT AND CREATING ACTIVE CLASS

const sectionInViewport = () =>{
    const sections =sections.getBoundingClientRect();
    return sections.top <= 150 && sections.bottom >= 150;
};

const activeSection = () => {
    for (let menu__link of sections){
        if (sectionInViewport(sections)) {
            if(!sections.classList.contains("your-active-class")) {
                sections.classList.add("your-active-class");
            }
      } else {
        sections.classList.remove("your-active-class");
      }
    }
};

navBar.appendChild(listItem);
function scrollBehavoir(navButton,sections){
    navButton,addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        })
    })
};
//creating smooth scroll
scrollTo();

function smoothScroll (){
    sections.forEach(section =>{
        const sectionTop = section.getBoundingClientRect();
        const link = document.querySelectorAll(`a[href = "#${section.id}"]`)
    })

    activeSection()
}

window.addEventListener("scroll" , function(){
    paraElems.forEach(function(paraElems){
        const pos = paraElems.getBoundingClientRect();
        const isInViewport = pos.top <= 150 && pos.top >= window.innerHeight;
    if (isInViewport) {
        paraElems.classList.add('active-section');
    }
    })
})

//BUILD THE NAVBAR

buildNav();

//SMOOTH SCROLL TO SECTION

smoothScroll();