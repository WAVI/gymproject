import MainPageComponent from './components/Homepage/MainPageComponent.vue';
import Contact from './components/Header/Compo/Contact.vue';
import AboutUs from './components/Header/Compo/AboutUs.vue';

export const routes = [
    { path: '', component: MainPageComponent },
    { path: '/contact', component: Contact },
    { path: '/aboutus', component: AboutUs }
];
