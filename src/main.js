import { createApp } from 'vue'
import App from './App.vue'
import NavigationBar from './components/NavigationBar.vue';
import MainBoard from './components/MainBoard.vue';

const app = createApp(App);

app.component("navigation-bar", NavigationBar);
app.component("main-board", MainBoard);

app.mount("#app");