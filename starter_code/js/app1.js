/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
//**SOURCE https://www.encodedna.com/javascript/create-ul-and-li-elements-dynamically-using-javascript.htm */
//**SOURCE https://stackoverflow.com/questions/69917843/using-foreach-method-with-array-to-build-navigation-menu-and-unordered-list-with */
const sectionsBethany = document.querySelectorAll('section');
const navBarOne = document.getElementById('navbar__list');
const arraySections = document.querySelectorAll('section');
const boxedSection = document.querySelector("div.section");
const result = boxedSection.getBoundingClientRect();
//console.log(result);
// unused variable const navBarToggle = document.getElementsByClassName('page__header');
const viewablePosition = (pos) => {
    let sectionPos = pos.getBoundingClientRect();
    return sectionPos.top <=1000 && sectionPos.bottom >= 1000;
};
/**
 * End Global Variables
 * Begin Main Functions
*/
// build the nav
//**Source https://stackoverflow.com/questions/69917843/using-foreach-method-with-array-to-build-navigation-menu-and-unordered-list-with
function buildDynamicNav () {
 arraySections.forEach(arraySections => {
    listNavBar = document.createElement('li');
    aNavBarhref = document.createElement('a');
    //^^^li and a tag elements are created
    natItems = document.getElementById('li');
    sectionId = arraySections.getAttribute('id');
    //li and array id are assigned
    sectionName = arraySections.getAttribute('data-nav');
    aNavBarhref.className = "menu__link";
    //
    let itemName =`${sectionName}`;
    let idLink = `#${sectionId}`;
    //
    aNavBarhref.append(itemName);
    aNavBarhref.dataset.nav = sectionId;
    aNavBarhref.href= idLink;
    listNavBar.append(aNavBarhref);
    navBarOne.append(listNavBar);
//^^^navbar appended
    listNavBar.addEventListener("click", () => {
        arraySections.scrollIntoView({
            behavior: "smooth"
        })
    })
 }
 )};
 
 buildDynamicNav();
//SOURCE:https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
//getBoundingclientrect
/*function windowPosition (top) {
    const winPos = top.getBoundingClientRect();
    return winPos.top <= 412 && winPos.bottom >= 412;
    if(winPos.top) {
        sectionsBethany.classList.add('your-active-class');
        navBarOne.querySelector(`[data-id=${id}]`).classList.add('your-active-class');
    }else{sectionsBethany.classList.remove('your-active-class');
    navBarOne.querySelector(`[data-id=${id}]`).classList.remove('your-active-class');}
};*/

// source https://www.w3schools.com/howto/howto_js_active_element.asp
// Add class 'active' to section when near top of viewport
//Add your-active-section
const activateCurrentSection = () => {
    sectionsBethany.forEach(sectionsBethany => {
        const activeView = navBarOne.querySelector(
            `[data-nav=${sectionsBethany.id}]`
        );
        //When section appears within viewport, windowPostion reflect 'active'
        //** if,else statement SOURCE: https://www.w3schools.com/jsref/jsref_if.asp
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
        if(viewablePosition(sectionsBethany)){
            sections.classList.add('your-active-class');
            activeView.classList.add('active');
            //When section appears outside of the viewport, windowPosition will have the 'active' removed.
        }else{
            sectionsBethany.classList.remove('your-active-class');
            activeView.classList.remove('active');
            //remove your-active-class
        } 
    });
}

const scrolling = () => {
    const menuLinkTod = document.querySelectorAll(".menu__link");
    menuLinkTod.forEach((id)=> {
        id.addEventListener("click", (scrolling)=> {
            scrolling.preventDefault();
            const anchorId = document.querySelector(id.getAttribute("href"));
            anchorId.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
};
/*
/*buildDynamicNav();
smoothScroll();
activateCurrentSection();
//ACtive Section Manager function - Used to clear all active sections prior to being target called*/

//**SOURCE: https://www.delftstack.com/howto/javascript/scrollevent-in-javscript/#:~:text=We%20can%20use%20scroll%20event%20Listeners%20to%20listen,console.log%28scrollX%29%3B%20%7D%29%3B%20The%20this%20signifies%20the%20window%20object.
window.addEventListener("scroll", smoothScroll => {
    let scrollY = this.scrollY;
    console.log(scrollY);
});
//**SOURCE https://javascript.info/onscroll
scrolling();