import MainPageComponent from './components/Homepage/MainPageComponent.vue';
import Contact from './components/Header/Compo/Contact.vue';
import AboutUs from './components/Header/Compo/AboutUs.vue';
import Album from './components/Header/Compo/Album.vue';

export const routes = [
    { path: '', component: MainPageComponent },
    { path: '/contact', component: Contact },
    { path: '/aboutus', component: AboutUs },
    {path: '/album', component: Album}
];
