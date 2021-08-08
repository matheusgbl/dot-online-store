import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import VueSidebarMenu from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
import App from './App.vue';
import MovieCard from './components/MovieCard.vue';

library.add(fas);

const app = createApp(App);

app.component('base-card', MovieCard);
app.component('fa', FontAwesomeIcon);
app.use(VueSidebarMenu);

app.mount('#app');
