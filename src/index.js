import "../assets/css/reset.css";
import "../assets/css/navbar.css";
import "../assets/css/style.css";


import { home, menu, contact } from "./home";

home();

const homeLink = document.getElementById('home');
const menuLink = document.getElementById('menu');
const contactLink = document.getElementById('contact');

menuLink.addEventListener('click', menu);

homeLink.addEventListener('click', home);

contactLink.addEventListener('click', contact);