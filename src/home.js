const home = () => {
    const homePage = document.querySelector('.content');
    while(homePage.firstChild) {
        homePage.removeChild(firstChild);
    }
    homePage.classList.add('home-background');
}

export { home }