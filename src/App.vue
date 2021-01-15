<template>
  <new-board-popup :open="currentPopup === 'new-board-popup'"></new-board-popup>
  <new-card-popup :open="currentPopup === 'new-card-popup'"></new-card-popup>
  <view-card-popup
    :open="currentPopup === 'view-card-popup'"
    :currentCardId="currentCardId"
  ></view-card-popup>
  <top-bar @add-board="openPopup('new-board-popup')"></top-bar>
  <main-board
    @new-card="openPopup('new-card-popup', $event)"
    @view-card="openPopup('view-card-popup', $event)"
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
      createNewBoard: this.createNewBoard,
      createNewCard: this.createNewCard,
      updateCardDetails: this.updateCardDetails,
      openPopup: this.openPopup,
      closePopup: this.closePopup,
      //params for popup
      currentCardId: this.currentCardId,
      addToBoardId: this.addToBoardId,
    };
  },
  data() {
    return {
      currentCardId: null,
      addToBoardId: null,
      currentPopup: null,
      listArray: [],
    };
  },
  methods: {
    openPopup(popup, params) {
      if (popup === "new-card-popup") {
        this.addToBoardId = params;
      } else if (popup === "view-card-popup") {
        this.currentCardId = params;
      }
      this.currentPopup = popup;
    },
    closePopup() {
      this.currentPopup = null;
    },
    async createNewBoard(name) {
      await db.addBoard(name);
      this.closePopup();
    },
    async createNewCard(title, des) {
      var card = {
        _id: Date.now().toString(),
        name: title,
        description: des,
      };
      await db.addCard(this.addToBoardId,card)
      this.closePopup();
    },
    async updateCardDetails(params) {
      this.listArray.forEach((board) => {
        const index = board.value.findIndex((card) => card._id === params._id);
        if (index !== -1) {
          board.value[index] = params;
        }
      });
      await db.updateBoard(this.listArray);
      this.closePopup();
    },
    async fetchData() {
      const temp = await db.readBoard();
      this.listArray.splice(0,this.listArray.length);
      this.listArray.push(...temp);
    },
    async syncData(){
      await db.updateBoard(this.listArray); 
    }
  },
  mounted(){
    this.fetchData();
  },
  beforeUpdate(){
    this.fetchData();
  }
};
</script>

<style>
#app {
  font-family: "Circular Std Book", serif, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0px;
  padding: 0px;
  background: #ffffff;
}
h1 {
  font-family: "Circular Std Bold";
  margin-left: 25px;
  margin-bottom: 0px;
}
</style>
