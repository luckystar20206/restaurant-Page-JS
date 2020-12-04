import "../assets/css/reset.css";
import "../assets/css/navbar.css";
import "../assets/css/style.css";

import { pageLoad } from "./page-load";

pageLoad.home();

const homeLink = document.getElementById('home');
const menuLink = document.getElementById('menu');
const contactLink = document.getElementById('contact');

menuLink.addEventListener('click', pageLoad.menu);

homeLink.addEventListener('click', pageLoad.home);

contactLink.addEventListener('click', pageLoad.contact);