//GLOBAL DEFINE
const sections = document.querySelectorAll('section');
const navListUL = document.getElementById('navbar__list');
//
let topOfSection = [];
//
function getSectionPositions(){
    const footerTopPosition = document.querySelectorAll('footer') + window.pageYOffset;
    for(let index = 0 ; index < sections.length; index++){
    let topPos = sections[index].getBoundingClientRect().top + window.pageYOffset;
    topOfSection[index] = topPos;
    if(index + 1 == sections.length){
        topOfSection[index + 1] = footerTopPosition;
    };
    };
    
    console.log(topOfSection);
};
//construct navbar
function activeSection(){
    for(let index = 0 ; index < sections.length; index++) {
        const anchorTags = document.getElementsByTagName('a');
        sections[index].classList.remove('your-active-class');
        anchorTags[index].classList.remove('active');
    };
};
function buildNav(){
    for(let index = 0 ; index < sections.length; index++) {
        const navMenu = document.getElementById('navbar__list');
        const liNavItem = document.createElement('li');
        const aNavItem = document.createElement('a');
    
        const liLabel = sections[index].getAttribute('data-nav');
        aNavItem.classList.add('anchor');
        aNavItem.innerHTML = liLabel;
        liNavItem.classList.add('list');
    
        aNavItem.setAttribute('href', '#'+ sections[index].id);
        aNavItem.setAttribute('data-id', sections[index].id);
        //liNavItem.innerHTML = `<a class='menu__link'>${sections.[index].dataset}</a>`;
    
        liNavItem.append(aNavItem);
        navMenu.append(liNavItem);
    
        //console.log(liNavItem)
        aNavItem.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = event.target.getAttribute('data-id');
            const sectionInViewport = document.getElementById(sectionId);
            activeSection();
            event.target.classList.add('active');
            sectionInViewport.classList.add('your-active-class');
            sectionInViewport.scrollIntoView({
                behavior: 'smooth'
            });
        });
    };
};
/*for(let index = 0 ; index < sections.length; index++) {
    const navMenu = document.getElementById('navbar__list');
    const liNavItem = document.createElement('li');
    const aNavItem = document.createElement('a');

    const liLabel = sections[index].getAttribute('data-nav');
    aNavItem.classList.add('anchor');
    aNavItem.innerHTML = liLabel;
    liNavItem.classList.add('list');

    aNavItem.setAttribute('href', '#'+ sections[index].id);
    aNavItem.setAttribute('data-id', sections[index].id);
    //liNavItem.innerHTML = `<a class='menu__link'>${sections.[index].dataset}</a>`;

    liNavItem.append(aNavItem);
    navMenu.append(liNavItem);

    //console.log(liNavItem)
    aNavItem.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = event.target.getAttribute('data-id');
        const sectionInViewport = document.getElementById(sectionId);
        activeSection();
        event.target.classList.add('active');
        sectionInViewport.classList.add('your-active-class');
        sectionInViewport.scrollIntoView({
            behavior: 'smooth'
        });
    });
};*/


function trackScrolling() {
    const positionY = window.pageYOffset;
    for(let index = 0; index <sections.length; index++){
        const firstPosition = topOfSection[index];
        const secondPosition = topOfSection[index+1];
        if(firstPosition <= positionY && secondPosition > positionY){
            activeSection();
            sections[index].classList.add('your-active-class');
            sections[index].classList.add('active');
        };
    };
};
    /*    const inView = sections[index].getBoundingClientRect().top;
        //const id = sections.getAttribute('id');
        const positionY = window.pageYOffset;
        sections.forEach(index => {
            const firstPosition = topOfSection[index];
            const secondPostion = topOfSection[index+1];
            if(firstPosition <= inView && secondPosition) {
                activeSection();
                    sections[index].classList.add('your-active-class');
                    anchorTags[index].classList.add('active');
            }
          })
        //console.log(positionY);
        };*/
buildNav();
getSectionPositions();

window.addEventListener('scroll', trackScrolling);

/*() =>{
    for(let index = 0 ; index < sections.length; index++) {
        const inView = sections[index].getBoundingClientRect().top;
        const id = sections.getAttribute('id');
        const positionY = inView.top <=463 && inView.bottom >= 463;
        if(positionY) {
            sections.classList.add("your-active-class");
            navListUL.querySelector(`[data-id=${id}]`).classList.add('your-active-section');
        } else{
            sections.classList.remove("your-active-class");
            navListUL.querySelector(`[data-id=${id}]`).classList.remove('your-active-section');

        };
    };
};*/
        console.log(scrollY);
