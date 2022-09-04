//DEFINE GLOBAL VARIABLE
const sections = document.querySelectorAll("section");
const navListUL = document.getElementById("navbar__list");
const navBar = document.querySelector ('.navbar__menu');

    const buildNav = () => {
        let navbar__menu = '';
    
        sections.forEach(section=>{
            const navBar = document.createElement("li");
            navBar.insertAdjacentHTML("afterBegin",`<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
            navListUL.append(navBar);
        });
    
        navigation.innerHTML = navBar;
    };

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

        inViewport = () => elementOffset < 6 && elementOffset >= -850;

        removeActive(section);
        addActive(inViewport(),section);
        });
};
  // console.log(navBarUL);
  window.addEventListener('click', scrollIntoView);
  
buildNav();
//}























/*const navListUL = document.getElementById("navbar__list");
const navBar = document.querySelector(".navbar__menu");

//CONSTRUCTION NAVBAR
function addActive(){
    constAtags = document.getElementsByTagName('a')
    for(let i = 0; i < section.length; i++){
        section[i].classList.remove("your-active-class");
        Atags[i].classList.remove("active");
    }
}
for(let index = 0; index <Array.length; index++){
    const element = Array[index];

    const buildNav = () => {
        let navbar__menu = '';

        sections.forEach(section=>{
            const navBar =document.createElement("li");
            navBar.insertAdjacentHTML("afterBegin", `<a href="#${section.id}" class=menu__link">${section.dataset.nav}</a>`);
            navListUL.appendChild(navBar);
        });
        navigation.innerHTML = navBar;
    };
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
    
            inViewport = () => elementOffset < 6 && elementOffset >= -850;
    
            removeActive(section);
            addActive(inViewport(),section);
            });
    };

    navBar.addEventListener("click", function (event){
        event.preventDefault();
        //const activeSect = event.target.getAttribute("data-id");
        const sectionToScrollTo = document.getElementById(sections.id);
        addActive();
        event.target.classList.add("active");
        sectionToScrollTo.classList.add("your-active-class");
        sectionToScrollTo.scrollIntoView({
            behavior: 'smooth'
        });
    });

    buildNav();
}*/