import { createApp } from 'vue'
import App from './App.vue'
import NavigationBar from './components/NavigationBar.vue';
import MainBoard from './components/MainBoard.vue';
import TheDialogBox from './components/cards/TheDialogBox.vue';
import NewBoardPopup from './components/cards/NewBoardPopup.vue';
import NewCardPopup from './components/cards/NewCardPopup.vue';
import ViewCardPopup from './components/cards/ViewCardPopup.vue';

const app = createApp(App);

app.component("navigation-bar", NavigationBar);
app.component("main-board", MainBoard);
app.component("the-dialog-box", TheDialogBox);
app.component("new-board-popup", NewBoardPopup);
app.component("new-card-popup", NewCardPopup);
app.component("view-card-popup", ViewCardPopup);

app.mount("#app");