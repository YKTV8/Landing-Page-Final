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
const sections = Array.from(document.querySelectorAll('sections'));
const menu = document.getElementById("NavBar__list");
const numberOfListItems = sections.length;

//below Function & for loop in order to assign name of each section into the array above.// 
function createListItem(){
    for (section of sections) {
        sectionName = section.getAttribute("data-nav");
        listItem = document.createElement("li");

        createListItem.innerHTML = `<a class= 'menu__link' href=#${sectionLink}'.$sectionName}</a>`;

        menu.appendChild(listItem);
    }
}

createListItem();

function toggleNavBar(){
    let userScroll;
    //Default Settings for NavBar while scrolling
    header.style.cssText = 'opacity: 1; transition: ease 0.3s ;';
    window.clearTimeout( userScroll );
    //The Timeout to run after scrolling ends
    userScroll = setTimeout(function() {
        //The Settings Executed on NavBar after Timeout finished
        header.style.cssText = 'opacity: .60; transition: ease 0.3s ;'
    }, 6000);
}

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
