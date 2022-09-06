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

        inViewport = () => elementOffset < 224 && elementOffset >= 224;

        removeActive(section);
        addActive(inViewport(),section);
        });

window.addEventListener('scroll', () => {
    sections.forEach( (section) => {

      // getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
      const inView = section.getBoundingClientRect();
      const id = section.getAttribute('id');
      const position =  inView.y <= 24 && inView.bottom >= 24
      // section active control
    console.log(inView);
    });
})};
/**function activeSection{
    window.addEventListener('click', inViewport){
    const inViewport = sections.getBoundingClientRect();
    const id = sections.getAttribute('id');
    const position = inView.y <= 6 && inView.bottom >= 6;**/
  // console.log(navBarUL);

  // console.log(navBarUL);
  //window.addEventListener('click', inViewport);
buildNav();