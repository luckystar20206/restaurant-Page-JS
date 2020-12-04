const homePage = document.querySelector('.content');

const home = () => {
    while(homePage.firstChild) {
        homePage.removeChild(homePage.firstChild);
    }
    const prevAct = document.querySelectorAll('.active');
    prevAct.forEach(tag => {
        tag.classList.remove('active');
    });
    const background = document.createElement('div');
    background.classList.add('home-background');
    homePage.appendChild(background);
    const heroTitle = document.createElement('h1');
    heroTitle.textContent = 'Majestic';
    heroTitle.classList.add('hero-title');
    homePage.appendChild(heroTitle);
    const homeLink = document.getElementById('home');
    homeLink.classList.add('active');
}

const menu = () => {
    while(homePage.firstChild) {
        homePage.removeChild(homePage.firstChild);
    }

    const prevAct = document.querySelectorAll('.active');
    prevAct.forEach(tag => {
        tag.classList.remove('active');
    });
    const menuLink = document.getElementById('menu');
    menuLink.classList.add('active');

    const background = document.createElement('div');
    background.classList.add('menu-background');
    homePage.appendChild(background);

}

const contact = () => {
    while(homePage.firstChild) {
        homePage.removeChild(homePage.firstChild);
    }

    const prevAct = document.querySelectorAll('.active');
    prevAct.forEach(tag => {
        tag.classList.remove('active');
    });
    const contactLink = document.getElementById('contact');
    contactLink.classList.add('active');

}


export { home, menu, contact }