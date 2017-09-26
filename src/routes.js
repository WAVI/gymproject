import MainPageComponent from './components/Homepage/MainPageComponent.vue';
import Contact from './components/Header/Compo/Contact.vue';

export const routes = [
    { path: '', component: MainPageComponent },
    { path: '/contact', component: Contact }
];
