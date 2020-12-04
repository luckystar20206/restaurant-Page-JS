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
    
    const menuContainer = document.createElement('div');
    homePage.appendChild(menuContainer);

    let menus = ['Dishes', 'Desserts', 'Drinks']
    menus.forEach(menu => {
        const menuTable = document.createElement('div');
        menuTable.innerHTML = `<h2>${menu}</h2>`;
        menuTable.classList.add('menu-table')
        menuContainer.appendChild(menuTable);
        for(let i = 0; i < 10; i++) {
            let item = document.createElement('p');
            item.classList.add('menu-item');
            item.textContent = 'item';
            menuTable.appendChild(item);
        }

    });

    menuContainer.classList.add('menu-flex');

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

    const background = document.createElement('div');
    background.classList.add('contact-background');
    homePage.appendChild(background);

    

    

}


export { home, menu, contact }