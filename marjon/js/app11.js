/* Manipulating the DOM exercise.
* Exercise programmatically builds navigation,
* scrolls to anchors from navigation,
* and highlights section in viewport upon scrolling.
* 
* Dependencies: None
* 
* JS Version: ES2015/ES6*/
//GLOBAL DEFINE Section and navbar__list globally defined
//Grabs unordered list from the page

// Dynamically build the navigation menu
//For loop to dynamically building navbar using for loop. 
//**SOURCE https://www.encodedna.com/javascript/create-ul-and-li-elements-dynamically-using-javascript.htm */
//**SOURCE https://stackoverflow.com/questions/69917843/using-foreach-method-with-array-to-build-navigation-menu-and-unordered-list-with */
//*SOURCE :  https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
//https://www.youtube.com/watch?v=m1DH8ljCqzo
const sections = document.querySelectorAll('section');
document.addEventListener('DOMContentLoaded', activeSection, false); 
document.addEventListener('DOMContentLoaded', activeNavBar, false); 
//**Source https://stackoverflow.com/questions/69917843/using-foreach-method-with-array-to-build-navigation-menu-and-unordered-list-with
function buildNav(){    
    for(let index = 0 ; index < sections.length; index++) {
        const navMenu = document.getElementById('navbar__list');
        const liNavItem = document.createElement('li');
        const aNavItem = document.createElement('a');
        //console.log(liNavItem)
        const liLabel = sections[index].getAttribute('data-nav');
        aNavItem.classList.add('anchorNav');
        aNavItem.innerHTML = liLabel;
        //liNavItem.classList.add('listNav');
        aNavItem.setAttribute('href', '#'+ sections[index].id);
        aNavItem.setAttribute('data-id', sections[index].id);
        //code below throws error in DOM
        //liNavItem.innerHTML = `<a class='menu__link'>${sections.dataset}</a>`;
        liNavItem.append(aNavItem);
        navMenu.append(liNavItem);
        //console.log(liNavItem)
        //Click event listener add for activation of activeSection function of navbar
        aNavItem.addEventListener('click',function(event) {
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
//function created to remove active section from div class .
function removeActiveSection(){
    for(let index = 0 ; index < sections.length; index++) {
        const anchorTags = document.getElementsByTagName('a');
        sections[index].classList.remove('your-active-class');
        anchorTags[index].classList.remove('active');
    };
};
//Brings the current section to the TOP of inViewport
//activeSection with eventlistener for scrolling into viewport and following the rules set in the if/else s
//active section function flagged to being similar to another project 
function activeSection (){
    window.addEventListener('scroll', function() {
		const sections = document.getElementsByClassName('section');		
		for (let index = 0; index < sections.length; index++) {
			const position = sections[index].getBoundingClientRect();
			const topPos = position.top;
				if (topPos <= window.innerHeight/2){
					let activeClass = document.getElementsByClassName("your-active-class");
					activeClass[0].className = activeClass[0].className.replace (" your-active-class", "");
					sections[index].className += " your-active-class";
			
					let currentSect = document.getElementsByClassName("active");  
						if (currentSect.length > 0) {
//removeActiveSection removes your-active-section from the div class as it passes thru the viewport.
							removeActiveSection();
							currentSect[0].className = currentSect[0].className.replace(" active", "");
						}
			
					let menuContainer = document.getElementById("navbar__list").querySelectorAll('li');
					menuContainer[index].className = " active";
				};
		};
	});
};
//Assigns 'active' state in nav bar when section enters into dimensions of viewport, if statement use to remove active conditions once
//top positions of next sections parameters enter the viewport section. 
function activeNavBar (){
	let menuContainer = document.getElementById("navbar__list");
	let menuBar = menuContainer.querySelectorAll('li');
	for (let index = 0; index < sections.length; index++) {
  		sections[index].addEventListener("click", function() {
			let actSect = document.getElementsByClassName("active");  
    		if (actSect.length > 0) {
      			actSect[0].className = actSect[0].className.replace(" active", "");
    		}else{
                sections[index].classList.remove('your-active-class');
                sections[index].classList.remove('active');
            };
 		});
	};
};
//**SOURCE: https://www.delftstack.com/howto/javascript/scrollevent-in-javscript/#:~:text=We%20can%20use%20scroll%20event%20Listeners%20to%20listen,console.log%28scrollX%29%3B%20%7D%29%3B%20The%20this%20signifies%20the%20window%20object.
//scrolling event function created to give indication of when one section is active and another is inactive.
function scrolling  (sections) {
    const menuLink = document.querySelectorAll(".menu__link");
    menuLink.forEach((id) => {
        id.addEventListener("click", (scrolling) => {
            scrolling.preventDefault();
            const anchorId = document.querySelector(id.getAttribute("href"));
            anchorId.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
};

/*function Scrolling (section1) {
	const section = document.getElementById('section'+section1);
	const positionY = section.offsetTop;
	event.preventDefault();
	window.scrollIntoView({
		left: 0, 
		top: positionY,
		behavior: 'smooth'
	});
};*/
buildNav();
