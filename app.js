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
const navBar = document.querySelectorAll('.navbar__menu');
let navList = document.querySelectorAll('#navbar__list');
const sections = document.querySelectorAll('seection');
const header = document.querySelector('page__header')
const footer = querySelector('footer');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function buildNav(){
    sections.forEach(section=>{
        let NavButton = Document.createElement('li');
        navButton.insertAdjacentHTML("afterBegin",`<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
        navList.appendChild(navButton);

        scrollBehavior(navButton, section);
    });

}

buildNav();



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active