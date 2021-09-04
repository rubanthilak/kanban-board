import { createApp } from 'vue'
import App from './App.vue'
import MainBoard from './components/MainBoard.vue';
import TopBar from './components/TopBar.vue';
import DropDownMenu from './components/dropdown/DropDownMenu.vue';
import ThePopup from './components/popup/ThePopup.vue';
import NewCardPopup from './components/popup/NewCardPopup.vue';
import DeleteCardPopup from './components/popup/DeleteCardPopup.vue';
import NewTaskPopup from './components/popup/NewTaskPopup.vue';
import ViewTaskPopup from './components/popup/ViewTaskPopup.vue';

const clickOutside = {
    beforeMount: (el, binding) => {
      el.clickOutsideEvent = event => {
        // here I check that click was outside the el and his children
        if (!(el == event.target || el.contains(event.target))) {
          // and if it did, call method provided in attribute value
          binding.value();
        }
      };
      document.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted: el => {
      document.removeEventListener("click", el.clickOutsideEvent);
    },
  };
  

const app = createApp(App);

app.directive("click-outside", clickOutside);

app.component("top-bar", TopBar);
app.component("main-board", MainBoard);
app.component("dropdown-menu", DropDownMenu);
app.component("the-popup", ThePopup);
app.component("new-card-popup", NewCardPopup);
app.component("delete-card-popup", DeleteCardPopup);
app.component("new-task-popup", NewTaskPopup);
app.component("view-task-popup", ViewTaskPopup);

app.mount("#app");