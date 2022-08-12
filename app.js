/**
 * Define Global Variables
 * 
*/
const navBar = document.querySelector('.navbar__menu');
const navListUL = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');


//const sections = Array.from(document.querySelectorAll('sections'));
//const menu = document.getElementById("NavBar__list");
//const numberOfListItems = sections.length;
// Construct the navbar

function buildNav() {
    for (let index = 0; index <Array.length; index++) {
        const element = array[index];
    }
}
//
function buildNav() {
    sections.forEach(section=>{
        const navButton = document.createElement('li');
        navButton.insertAdjacentHTML("afterBegin",`<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
        navListUL.appendChild(navButton);

        scrollBehavior(navButton, section);
    });

    navBar.appendChild(navListUL);
}

buildNav();
//
listItem = document.createElement('li');

navBar.appendChild(listItem);
function scrollBehavior(navButton,section){
    navButton.addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop, behavior: "smooth"
        })
    })
}

//
function activeSection(){
    const navActive = document.querySelectorAll(".menu__link")
    sections.forEach((section, i)=>{
    const sectionBond = section.getBoundingClientRect();
        if (sectionBond.top <= 380 && sectionBond.bottom >= 350){
            section.classlist.add("your-active-class");
            navACtive[i].classList.add(active_button);
        } else{
            section.classList.remove("your-active-class");
            navActive[i].classList.remove("active_button")
        }
    })
}
function toggleNavBar(){}

window.addEventListener('scroll', smoothScroll); {
    function smoothScroll(){
        sections.forEach(section =>{
            const sectionTop = section.getBoundingClientRect().top;
            const link = document.querySelector(`a[href = "#${section.id}"]`)
        })

    activeSection();
    toggleNavBar();
}
};
//below Function & for loop in order to assign name of each section into the array above.// 
/*function createListItem(){
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
