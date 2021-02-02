import { createApp } from 'vue'
import App from './App.vue'
import MainBoard from './components/MainBoard.vue';
import TopBar from './components/TopBar.vue';
import ThePopup from './components/popup/ThePopup.vue';
import NewCardPopup from './components/popup/NewCardPopup.vue';
import DeleteCardPopup from './components/popup/DeleteCardPopup.vue';
import NewTaskPopup from './components/popup/NewTaskPopup.vue';
import ViewTaskPopup from './components/popup/ViewTaskPopup.vue';

const app = createApp(App);

app.component("top-bar", TopBar);
app.component("main-board", MainBoard);
app.component("the-popup", ThePopup);
app.component("new-card-popup", NewCardPopup);
app.component("delete-card-popup", DeleteCardPopup);
app.component("new-task-popup", NewTaskPopup);
app.component("view-task-popup", ViewTaskPopup);

app.mount("#app");