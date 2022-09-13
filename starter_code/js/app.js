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
const sections = document.querySelectorAll('section');
const navBar = document.getElementById('navbar__list');
const navMenu = document.getElementsByClassName('navbar__menu');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildDynamicNav(){
    for( let i = 0; i <sections.length; i++) {
        const dNavBar = document.getElementById('navbar__list');
        const liItems = document.createElement('li');
        const aItems = document.createElement('a');
        //console.log(liItems)
        const labelList = sections[i].getAttribute('data-nav');
        aItems.classList.add('anchorNav');
        aItems.innerHTML = labelList;
        //liItems.classList.add('listItem')
        aItems.setAttribute('href', '#'+ sections[i].id);
        aItems.setAttribute('data-id', sections [i].id);

        liItems.append(aItems);
        dNavBar.append(liItems);

        aItems.addEventListener('click',function(event){
            event.preventDefault();
            const sectionId = event.target.getAttribute('data-id');
            const sectionInViewPort = document.getElementById(sectionId);
            activateCurrentSection();
            removeActiveSection();
            event.target.classList.add('active');
            sectionInViewPort.classList.add('your-active-section');
            sectionInViewPort.scrollIntoView({
                behavior: 'smooth'
            });
        });
        aItems.addEventListener('scroll',function(event){
            event.preventDefault();
            const sectionId = event.target.getAttribute('data-id');
            const sectionInViewPort = document.getElementById(sectionId);
            activateCurrentSection();
            event.target.classList.add('active');
            sectionInViewPort.classList.add('your-active-section');
        })
    }
}
buildDynamicNav();
// source https://www.w3schools.com/howto/howto_js_active_element.asp
// Add class 'active' to section when near top of viewport

//Remove your-active-class
function removeActiveSection(){
    for(let i = 0 ; i < sections.length; i++) {
        const anchorTags = document.getElementsByTagName('a');
        sections[i].classList.remove('your-active-class');
        anchorTags[i].classList.remove('active');
    };
};
//Add your-your-active-section
function addActiveSection(){
    for (let i = 0; i < sections.length; i++) {
        const sections = sections[i].getBoundingClientRect();
        sections[i].classList.add('your-active=class');
        anchorTags[i].classList.add('your-active-class');
    };
};
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
function activateCurrentSection(){
    for (let i = 0; i <sections.length; i++) {
        const sectPosition = sections[i].getBoundingClientRect().top;
        const top = sectPosition.top;
        if ( top <=window.innerHTML){
            let actClass = document.getElementsByClassName ('your-active-class');
            actClass = [i].className = actClass[i].className.replace('your-active-section');
            sections[i].className = 'your-active-class';
        };
    };
};
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active