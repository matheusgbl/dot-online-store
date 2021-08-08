import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import VueSidebarMenu from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
import App from './App.vue';
import MovieCard from './components/card/MovieCard.vue';
import Header from './components/header/Header.vue';
import MobileHeader from './components/header/MobileHeader.vue';
import CartSidebar from './components/sidebar/CartSidebar.vue';
import FavSidebar from './components/sidebar/FavSidebar.vue';
import MobileSidebar from './components/sidebar/MobileSidebar.vue';

library.add(fas);

const app = createApp(App);

app.component('base-card', MovieCard);
app.component('page-header', Header);
app.component('mobile-header', MobileHeader);
app.component('cart-sidebar', CartSidebar);
app.component('fav-sidebar', FavSidebar);
app.component('mobile-sidebar', MobileSidebar);
app.component('fa', FontAwesomeIcon);
app.use(VueSidebarMenu);

app.mount('#app');
