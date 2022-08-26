//DEFINE GLOBAL VARIBLE

//NavBar selection & const sections [sec1 thru sec6]
const navListUL = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

const navBar = document.querySelector(".navbar__menu");

//const navListUL = document.querySelector("#navbar__list");
//const paraElems = documents.querySelectorAll('p');
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
        const navBar = document.createElement("li");
        navBar.insertAdjacentHTML("afterBegin",`<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
        navListUL.appendChild(navBar);
    });

    navigation.innerHTML = navBar;
};
//CONFIRM VIEWPORT AND CREATING ACTIVE CLASS

const offset = (section) =>{
    return Math.floor(section.getBoundingClientRect().top);
};

const removeActive = (section) => {
    section.classList.remove('your-active-section');
    section.style.cssText = "background-color: rgb(125, 0, 125);";
};

const addActive = (conditional, section) => {
    if(conditional){
    section.classList.add('your-active-section');
    section.style.cssText = "background-color: rgb(15, 200, 125);";
    };
};

const activeSection = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);

        inViewport = () => elementOffset < 250 && elementOffset >= -850;

        removeActive(section);
        addActive(inViewport(),section);
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
*/
const smoothScroll = () =>{

    const sect = document.querySelectorAll("navbar__menu");
    sect.forEach((sect)=> {
        sect.addEventListener("click", () => {
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