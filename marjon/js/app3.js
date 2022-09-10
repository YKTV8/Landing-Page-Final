//const sections = document.querySelectorAll('section');
const navListUL = document.getElementById('navbar__list');
const sections = document.getElementsByClassName('overlay1');
const navBar = document.querySelector (".navbar__menu");

let topPosition = [];

function getSectionInViewport(){
    for (let index = 0; index < sections.length; index++) {
        let topSect = sections[index].getBoundingClientRect().top
        topPosition[index] = topSect;
    };
};
console.log(getSectionInViewport)
function activeSection(){
    const activeSections = document.querySelectorAll('section');
    for (let index = 0; index < sections.length; index++) {
        sections[index].classList.remove ('your-active-class');
        anchorTags[index].classList.remove('active-section-bg');
    }
}

function buildNav(){
    for (let index = 0; index <Array.length; index++) {
        const navMenu = document.getElementsByTagName('navbar__list');
        let navbar__menu = '';

        const liNav = document.createElement ('li');
        const aNav = document.createElement ('a');
        const textLabel = sections[index].getAttribute('data-nav');
        aNav.classList.add('aNav');
        aNav.innerHTML = textLabel;
        liNav.classList.add('aNav');
        aNav.setAttribute('href', '#' + sections[index].id);
        aNav.setAttribute('data-id', sections[index].id);
        
        liNav.append(navMenu);

        //liNav.append(aNav);
        //navMenu.append(liNav);
        aNav.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = event.target.getAttribute('data-id');
            const sectionToScrollTo = document.getElementById(sectionId);
            activeSection();
            event.target.classList.add('active');
            sectionToScrollTo.classList.add('active-section');
            sectionToScrollTo.getSectionInViewport({
                behavoir: "smooth"
            });
        });
    };
};
function trackScrolling() {
    const position = window.pageYOffset;
};

buildNav();
window.addEventListener('scroll', trackScrolling);