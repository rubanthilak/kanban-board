<template>
  <new-card-popup :open="currentPopup === 'new-card-popup'"></new-card-popup>
  <delete-card-popup
    :open="currentPopup === 'delete-card-popup'"
  ></delete-card-popup>
  <new-task-popup :open="currentPopup === 'new-task-popup'"></new-task-popup>
  <view-task-popup
    :open="currentPopup === 'view-task-popup'"
    :currentTaskId="currentTaskId"
  ></view-task-popup>
  <top-bar @add-card="openPopup('new-card-popup')"></top-bar>
  <main-board
    @new-task="openPopup('new-task-popup', $event)"
    @view-task="openPopup('view-task-popup', $event)"
    @delete-card="openPopup('delete-card-popup', $event)"
    @sync-data="syncData"
  ></main-board>
</template>

<script>
import db from "./helpers/DatabaseHelper";
export default {
  name: "App",
  provide() {
    return {
      listArray: this.listArray,
      //methods
      createNewCard: this.createNewCard,
      deleteCard: this.deleteCard,
      createNewTask: this.createNewTask,
      updateTaskDetails: this.updateTaskDetails,
      openPopup: this.openPopup,
      closePopup: this.closePopup,
      fetchData: this.fetchData,
      syncData: this.syncData,
      //params for popup
      currentTaskId: this.currentTaskId,
      addToCardId: this.addToCardId,
      deleteCardId: this.deleteCardId,
      deleteTask: this.deleteTask
    };
  },
  data() {
    return {
      currentTaskId: null,
      addToCardId: null,
      currentPopup: null,
      listArray: [],
      deleteCardId: null,
    };
  },
  methods: {
    openPopup(popup, params) {
      if (popup === "new-task-popup") {
        this.addToCardId = params;
      } else if (popup === "view-task-popup") {
        this.currentTaskId = params;
      } else if (popup === "delete-card-popup") {
        this.deleteCardId = params;
      }
      this.currentPopup = popup;
    },
    closePopup() {
      this.currentPopup = null;
    },
    async createNewCard(name) {
      var temp = {
        _id: new Date().toISOString(),
        title: name,
        value: [],
      };
      await db.addCard(temp);
      this.closePopup();
    },
    async deleteCard() {
      await db.removeCard(this.deleteCardId);
      await this.fetchData();
      this.closePopup();
    },
    async createNewTask(title, des) {
      var card = {
        _id: Date.now().toString(),
        name: title,
        description: des,
      };
      await db.addTask(this.addToCardId, card);
      this.closePopup();
    },
    async updateTaskDetails(params) {
      this.listArray.forEach((card) => {
        const index = card.value.findIndex((task) => task._id === params._id);
        if (index !== -1) {
          card.value[index] = params;
        }
      });
      await db.updateBoard(this.listArray);
      this.closePopup();
    },
    async deleteTask(id) {
      this.listArray.forEach((card) => {
        const index = card.value.findIndex((task) => task._id === id);
        if (index !== -1) {
          card.value.splice(index, 1);
        }
      });
      await db.updateBoard(this.listArray);
      this.closePopup();
    },
    async fetchData() {
      const temp = await db.readBoard();
      this.listArray.splice(0, this.listArray.length);
      this.listArray.push(...temp);
    },
    async syncData() {
      await db.updateBoard(this.listArray);
    },
  },
  mounted() {
    this.fetchData();
  },
  beforeUpdate() {
    this.fetchData();
  },
};
</script>

<style>
@font-face {
  font-family: font-regular;
  src: url(./assets/font_regular.ttf);
}

@font-face {
  font-family: font-bold;
  src: url(./assets/font_bold.ttf);
}

#app {
  font-family: font-regular, serif, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0px;
  padding: 0px;
  background: #ffffff;
  overflow-x: hidden;
}

p {
  font-family: font-regular;
}

h1 {
  font-family: font-bold;
  margin-left: 25px;
  margin-bottom: 0px;
}

.flex {
  display: flex;
}
</style>
