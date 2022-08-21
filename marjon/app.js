//DEFINE GLOBAL VARIABLE
const navBar = document.querySelector('.navbar__menu');
const navListUL = document.querySelector('#navbar__list');
//const sections = document.querySelectorAll('section');
const paraElems = document.querySelectorAll('p');
listItem = document.createElement('li');

let section = Array.from(document.querySelectorAll('section'));
/*const menu = document.getElementById("NavBar__list");
*const numberOfListItems = sections.length;*/


//CONSTRUCT NAVBAR DYNAMICALLY


function buildNav() {
    for (let index = 0; index <Array.length; index++) {
        const element = Array[index];
    }
}
//
/*function buildNav() {
    section.forEach(section=>{
        const navButton = document.createElement('li');
        navButton.insertAdjacentHTML("afterBegin",`<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
        navListUL.appendChild(navButton);

        scrollBehavior(navButton, section);
    });

    navBar.appendChild(navListUL);
}*/

//buildNav();
//CONFIRM VIEWPORT AND CREATING ACTIVE CLASS
const sectionInViewport = (view) =>{
    const sections = sections.getBoundingClientRect();
    return sections.top <= 150 && sections.bottom >= 150;
};


const activeSection = () => {
    for (let menu__link of sections){
        if (sectionInViewport(sections)) {
            if(!sections.classList.contains("your-active-class")) {
                sections.classList.add("your-active-class");
            }
        } else {
            sections.classList.remove("your-active-class");
        }
    }
};

/*function activeSection(){
    const navActive = document.querySelectorAll(".menu__link")
    sections.forEach((section, i)=>{
    const sectionBond = section.getBoundingClientRect();
        if (sectionBond.top <= 0 && sectionBond.bottom >= 350){
            section.classlist.add("your-active-class");
            navActive[i].classList.add(active_button);
        } else{
            section.classList.remove("your-active-class");
            navActive[i].classList.remove("active_button")
        }
    })
}
function toggleNavBar(){}*/


//listItem = document.createElement('li');

navBar.appendChild(listItem);
function scrollBehavior(navButton,section){
    navButton.addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        })
    })
}
//CREATING SMOOTH SCROLL
/*const scrolling = () => {
    document.querySelectorAll('.navbar__menu').forEach((link) => {
        link.addEventListener('click', function (j) {
            j.preventDefault();
            document.querySelector(link.getAttribute('href')).scrolling({
                behavior: "smooth",
            });
            /*for(i = 0; i< sections ; i++){
                sections[i].addEventListener("click", sectionScroll(link));
            }*
        });
    });
};*/


scrollTo();
/*function sectionInViewPort (view) {
    let sectionPos = elem.getBoundingClientRect();
    return (sectionPos.top >= 150);
}*/

//window.addEventListener('scroll', smoothScroll); {
    function smoothScroll(){
        sections.forEach(section =>{
            const sectionTop = section.getBoundingClientRect().top;
            const link = document.querySelector(`a[href = "#${section.id}"]`)
        })

    activeSection();
    //sectionInViewPort();
}
//};

window.addEventListener('scroll', function(){
    paraElems.forEach(function(paraElems){
        const pos = paraElems.getBoundingClientRect();
        const isInViewport = pos.top <= 150 && pos.top >= window.innerHeight;
    if (isInViewport) {
        paraElems.classlist.add('active-section');
    }
    })
})

//BUILD THE NAVBAR MENU

 buildNav();

 //SMOOTH SCROLL TO SECTION

 smoothScroll();


// document.addEventListener("scroll", activeSection);
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
