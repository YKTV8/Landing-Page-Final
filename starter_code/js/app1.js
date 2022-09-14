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
const sections = document.querySelectorAll('section');
const navBar = document.getElementById('navbar__list');
const nameId = document.getElementById('id');
const arraySections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/**
 * End Helper Functions
 * Begin Main Functions
*/
// build the nav
//**Source https://stackoverflow.com/questions/69917843/using-foreach-method-with-array-to-build-navigation-menu-and-unordered-list-with
const buildDynamicNav = () =>{
 arraySections.forEach(arraySections => {
    listNavBar = document.createElement('li');
    aNavBarhref = document.createElement('a');
    //^^^li and a tag elements are created
    natItems = document.getElementById('li');
    sectionId = arraySections.getAttribute('id');
    //li and array id are assigned
    sectionName = arraySections.getAttribute('data-nav');
    aNavBarhref.className = "menu";
    
    
    let itemName =`${sectionName}`;
    let idLink = `#${sectionId}`;
    
    
    aNavBarhref.append(itemName);
    aNavBarhref.dataset.nav = sectionId;
    aNavBarhref.href= idLink;
    listNavBar.append(aNavBarhref);
    navBar.append(listNavBar);
//^^^navbar appended
    listNavBar.addEventListener('click', ()=>{
        arraySections.scrollIntoView({
            behavior: "smooth"
        });
    });
 });
};
//smoothScroll();
buildDynamicNav();
smoothScroll(event);
//ACtive Section Manager function - Used to clear all active sections prior to being target called

//retrieve section positions
//finding top section position for each.
//Array built

//SOURCE:https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
const windowPosition = (top) => {
    let winPos = top.getBoundingClientRect();
    return winPos.top <= 250 && winPos.bottom >= 250;
    if(winPos.top) {
        sections.classList.add('your-active-class');
        navBar.querySelector(`[data-id=${id}]`).classList.add('your-active-class');
    }else{sections.classList.remove('your-active-class');
    navBar.querySelector(`[data-id=${id}]`).classList.remove('your-active-class');}
};

// Scroll to anchor ID using scrollTO event


//**SOURCE: https://www.delftstack.com/howto/javascript/scrollevent-in-javscript/#:~:text=We%20can%20use%20scroll%20event%20Listeners%20to%20listen,console.log%28scrollX%29%3B%20%7D%29%3B%20The%20this%20signifies%20the%20window%20object.

window.addEventListener("scroll", smoothScroll => {
    let scrollY = this.scrollY;
   // console.log(scrollY);
});


window.addEventListener('click', navBarClick)

//navBar.addEventListener('click', navBarClick)

function navBarClick() {
    navbarList.classList.toggle('scrolling');
    nameId.classList.toggle('open');
}
arraySections.forEach(elem => elem.addEventListener('click', navBarClick));

function navBarClick(event) {
    smoothScroll(event);

}

function smoothScroll(section){
    //const targetId = arraySections.getAttribute('href'); /*? 'header' : event.currentTarget.getAttribute('href');*/
    const sections = document.getElementById('section' + section)
    const sectionPositionY = arraySections.offsetTop;

        window.scrollTo({
            top: sectionPositionY,
            behavior: 'smooth'

        });
        
        
    }
// source https://www.w3schools.com/howto/howto_js_active_element.asp
// Add class 'active' to section when near top of viewport

//Remove your-active-class

//Add your-your-active-section
const activateCurrentSection = () => {
    sections.forEach(sections => {
        const activeView = navBar.querySelector(
            `[data-nav=${sections.id}]`
        );
        //When section appears within viewport, windowPostion reflect 'active'
        //** if,else statement SOURCE: https://www.w3schools.com/jsref/jsref_if.asp
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
        if(windowPosition(sections)){
            sections.classList.add('your-active-class');
            activeView.classList.add('active');
            //When section appears outside of the viewport, windowPosition will have the 'active' removed.
        }else{
            sections.classList.remove('your-active-class');
            activeView.classList.remove('active');
        } 
    });
}
//**SOURCE https://javascript.info/onscroll */
window.addEventListener('scroll', activateCurrentSection);

 /*function smoothScrolling(target, duration){
    let targets = document.querySelectorAll('section');
    

    console.log(targets);
 };

 smoothScrolling();*/

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu with and without active state

// Scroll to section on link click

// Set sections as active