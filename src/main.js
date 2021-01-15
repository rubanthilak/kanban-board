import { createApp } from 'vue'
import App from './App.vue'
import MainBoard from './components/MainBoard.vue';
import TopBar from './components/TopBar.vue';
import ThePopup from './components/popup/ThePopup.vue';
import NewBoardPopup from './components/popup/NewBoardPopup.vue';
import NewCardPopup from './components/popup/NewCardPopup.vue';
import ViewCardPopup from './components/popup/ViewCardPopup.vue';

const app = createApp(App);

app.component("top-bar", TopBar);
app.component("main-board", MainBoard);
app.component("the-popup", ThePopup);
app.component("new-board-popup", NewBoardPopup);
app.component("new-card-popup", NewCardPopup);
app.component("view-card-popup", ViewCardPopup);

app.mount("#app");