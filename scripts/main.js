// side menu functionality

var sideMenu = document.getElementById("side-menu");

function openSlideMenu() {
    sideMenu.style.width = "200px";
}

function closeSlideMenu() {
    sideMenu.style.width = "0px";
}

// navigation

var contentHome = document.querySelector(".content-home");
var contentProjects = document.querySelector(".content-projects");
var contentAbout = document.querySelector(".content-about");
var contentContact = document.querySelector(".content-contact");

document.querySelector(".navbar ul").addEventListener("click", navClickEvent);
document.querySelector("#side-menu ul").addEventListener("click", navClickEvent);

function navClickEvent(e) {
    e.preventDefault();

    sideMenu.style.width = "0px";
    
    switch (e.target.className) {
        case "nav-home":
            window.scroll({
                top: 0,
                behavior: "smooth"
            });

            break;

        case "nav-about":
            scrollToElement(contentAbout);
            break;

        case "nav-contact":
            scrollToElement(contentContact);
            break;

        case "nav-projects":
            scrollToElement(contentProjects);
            break;
    
        default:
            break;
    }
}

function scrollToElement(element) {
    element.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// make navbar shadow disappear

var navbarShadowVisible = true;
var navbar = document.querySelector(".navbar");

window.onscroll = function() {
    if (navbarShadowVisible && window.pageYOffset > 240) {
        navbar.style.boxShadow = "0px 10px 100px #0080ff6b";
        navbarShadowVisible = false;
    }
    else if (!navbarShadowVisible && window.pageYOffset < 240) {
        navbar.style.boxShadow = "0px 10px 100px #0080ffc7";
        navbarShadowVisible = true;
    }
};