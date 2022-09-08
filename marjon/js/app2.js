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
            navBar.addEventListener("click", ()=> {
                section.scrollIntoView({behavior:"smooth"});
            });
        });
    
      //  navigation.innerHTML = navBar;
    };

buildNav();


//Scroll Detection for sections
window.addEventListener("scroll", () =>{
    sections.forEach((section => {
        const inView = section.getBoundingClientRect();
        const id = section.getAttribute("id");
        const position = inView.top <= 375 && inView.bottom >= 375;
        if(position) {
            section.classList.add("your-active-class");
            navListUL.querySelector(`[data-id=${id}]`).classList.add('your-active-section');
        } else{
            section.classList.remove("your-active-class");
            navListUL.querySelector(`[data-id=${id}]`).classList.remove('your-active-section');
        };
    }));

        console.log(scrollY)
});
        /*const addActive = (conditional, section) => {
            if(conditional){
            section.classList.add('your-active-section');
            section.style.cssText = "background-color: rgb(15, 200, 125);";
            };

const removeActive = (section) => {
    section.classList.remove('your-active-section');
    section.style.cssText = "background-color: rgb(125, 0, 125);";
        }};

/*window.addEventListener('scroll', () => {
    sections.forEach( (section) => {

      // getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
      const inView = section.getBoundingClientRect();
      const id = section.getAttribute('id');
      const position =  inView.y <= 24 && inView.bottom >= 24
      // section active control
    //console.log(inView);
    });
});*/