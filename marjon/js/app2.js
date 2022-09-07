//DEFINE GLOBAL VARIABLE
const sections = document.querySelectorAll("section");
const navListUL = document.getElementById("navbar__list");
const navBar = document.querySelector (".navbar__menu");
let section = document.querySelectorAll("section");
    const buildNav = () => {
        let navbar__menu = '';
    
        sections.forEach(section=>{
            const navBar = document.createElement("li");
            //navBar.insertAdjacentHTML("afterBegin",`<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
            navBar.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
            
            navListUL.append(navBar);
        });
    
      //  navigation.innerHTML = navBar;
    };

buildNav();
console.log(buildNav)


navBar.addEventListener("click", intoView);

function intoView (){
    sections.scrollIntoView({behavoir : "smooth"});
};

//Scroll Detection for sections
window.addEventListener("scroll", () =>{
    sections.forEach((section => {
        const inView = section.getBoundingClientRect();
        const id = section.getAttribute("id");
        const position = inView.top <=175 && inView.bottom >= 175;

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
/*
const activeSection = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);

        inViewport = () => elementOffset < 224 && elementOffset >= 224;

        removeActive(section);
        addActive(inViewport(),section);
        });

    };*/
}));

window.addEventListener('scroll', () => {
    sections.forEach( (section) => {

      // getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
      const inView = section.getBoundingClientRect();
      const id = section.getAttribute('id');
      const position =  inView.y <= 24 && inView.bottom >= 24
      // section active control
    console.log(inView);
    });
});


});