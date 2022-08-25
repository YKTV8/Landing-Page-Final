//DEFINE GLOBAL VARIBLE

//NavBar selection & const sections [sec1 thru sec6]
const navListUL = document.getElementById("navbar__list");

const navBar = document.querySelector(".navbar__menu");
//const navListUL = document.querySelector("#navbar__list");
//const paraElems = documents.querySelectorAll('p');
const sections = document.querySelectorAll("section");
//let section = Array.from(document.querySelectorAll("section"));
//const section = Array.from(sections);

//CONSTRUCT NAVBAR DYNAMICALLY

/*function buildNav() {
    for (let index = 0; index <Array.length; index++) {
        const element = Array[index];
    };
};*/
const buildNav = () => {
    let navbar__menu = '';

    sections.forEach(section=>{
        const navButton = document.createElement("li");
        navButton.insertAdjacentHTML("afterBegin",`<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
        navListUL.appendChild(navButton);
    });
};
//CONFIRM VIEWPORT AND CREATING ACTIVE CLASS

const offset = (section) =>{
    return Math.floor(section.getBoundingClientRect().top);
};

const removeActiveSection = (section) => {
    section.classList.remove('your-active-section');
};

const addActiveSection = (conditional, section) => {
    if(conditional){
    section.classList.add('your-active-section');
    };
};

const activeSection = () => {
    sections.forEach(sections => {
        const elementOffset = offset(sections);

        inViewport = () => elementOffset < 0 && elementOffset >= -150;

        removeActiveSection(sections);
        addActiveSection(inViewport(),sections);
        });
};
window.addEventListener("scroll", activeSection);
//navBar.appendChild(navListUL);
/**function scrollBehavoir(navButton,sections){
    navButton,addEventListener("click", function(event){
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
    document.querySelectorAll(".menu__link").forEach((anchor)=> {
        anchor.addEventListener("scroll", function () {
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

//smoothScroll();