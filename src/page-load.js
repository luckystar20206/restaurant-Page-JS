const pageLoad = (() => {
  const HOMEPAGE = document.querySelector('.content');

  const clearContent = () => {
    while (HOMEPAGE.firstChild) {
      HOMEPAGE.removeChild(HOMEPAGE.firstChild);
    }
  };

  const clearActiveTab = () => {
    const prevAct = document.querySelectorAll('.active');
    prevAct.forEach(tag => {
      tag.classList.remove('active');
    });
  };

  const generateBackground = (section) => {
    const background = document.createElement('div');
    background.classList.add(`${section}-background`);
    HOMEPAGE.appendChild(background);
  };

  const highlightTab = (tab) => {
    const link = document.getElementById(tab);
    link.classList.add('active');
  };

  const home = () => {
    clearContent();
    clearActiveTab();
    generateBackground('home');
    highlightTab('home');

    const heroTitle = document.createElement('h1');
    heroTitle.textContent = 'Majestic.';
    heroTitle.classList.add('hero-title');
    HOMEPAGE.appendChild(heroTitle);
  };

  const menu = () => {
    clearContent();
    clearActiveTab();
    generateBackground('menu');

    highlightTab('menu');

    const menuContainer = document.createElement('div');
    HOMEPAGE.appendChild(menuContainer);

    const menus = ['Dishes', 'Desserts', 'Drinks'];
    menus.forEach(menu => {
      const menuTable = document.createElement('div');
      menuTable.innerHTML = `<h2>${menu}</h2>`;
      menuTable.classList.add('menu-table');
      menuContainer.appendChild(menuTable);
      for (let i = 0; i < 10; i += 1) {
        const item = document.createElement('p');
        item.classList.add('menu-item');
        item.textContent = 'item';
        menuTable.appendChild(item);
      }
    });

    menuContainer.classList.add('menu-flex');
  };

  const contact = () => {
    clearContent();
    clearActiveTab();
    generateBackground('contact');

    highlightTab('contact');

    const header = document.createElement('div');
    header.classList.add('contact-section');
    header.innerHTML = `<h1 class='contact-header'>Contact us</h1>
    <p class='contact-info'> <span class='tell'>TEL</span> +57 3104297026 </p>`;

    HOMEPAGE.appendChild(header);


    const socials = document.createElement('ul');
    socials.classList.add('socials');
    socials.innerHTML = `<span class='socials-title'>Socials: </span><li><i class="fab fa-facebook icon"></i></li>
    <li><i class="fab fa-instagram icon"></i></li>`;
    header.appendChild(socials);
  };

  return {
    home,
    menu,
    contact,
  };
})();

export default pageLoad;