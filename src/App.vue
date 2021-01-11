<template>
  <new-board-popup :open="currentPopup === 'new-board-popup'"></new-board-popup>
  <new-card-popup :open="currentPopup === 'new-card-popup'"></new-card-popup>
  <view-card-popup :open="currentPopup === 'view-card-popup'"></view-card-popup>
  <top-bar @add-board="openPopup('new-board-popup')"></top-bar>
  <main-board @new-card="openPopup('new-card-popup',$event)" @view-card="openPopup('view-card-popup',$event)"></main-board>
</template>

<script>
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
      addToBoardId: this.addToBoardId
    };
  },
  data() {
    return {
      currentCardId: 1,
      addToBoardId: null,
      currentPopup: null,
      renderKey: 0,
      listArray: [
        {
          id: 1,
          name: "Things to do  🚀",
          value: [
            { name: "John", id: 1, description: "Hello" },
            { name: "Joao", id: 2, description: "Hello" },
            { name: "Jean", id: 3, description: "Hello" },
            { name: "Gerard", id: 4, description: "Hello" },
          ],
        },
        {
          id: 2,
          name: "On Progress ...",
          value: [
            { name: "Juan", id: 5, description: "Hello" },
            { name: "Edgard", id: 6, description: "Hello" },
            { name: "Johnson", id: 7, description: "Hello" },
          ],
        },
        {
          id: 3,
          name: "Completed 🎈",
          value: [
            { name: "Juan", id: 8, description: "Hello" },
            { name: "Edgard", id: 9, description: "Hello" },
            { name: "Johnson", id: 10, description: "Hello" },
          ],
        },
      ],
    };
  },
  methods: {
    rerender(){
      this.renderKey +=1
    },
    openPopup(popup,params){
      if(popup === "new-card-popup"){
        this.addToBoardId = params
      }
      else if(popup === "view-card-popup"){
        this.currentCardId = params
        this.rerender();
      }
      this.currentPopup= popup;
    },
    closePopup(){
      this.currentPopup= null;
    },
    createNewBoard(name) {
      this.listArray.push({
        name: name,
        value: [],
      });
      this.closePopup();
    },
    createNewCard(title, des) {
      const selectedItem = this.listArray.find((board) => board.id === this.addToBoardId);
      selectedItem.value.push({
        id: Date.now().toString(),
        name: title,
        description: des,
      });
      this.closePopup();
    },
    updateCardDetails(params) {
      this.listArray.forEach((board) => {
        const index = board.value.findIndex((card) => card.id === params.id);
        if (index !== -1) {
          board.value[index] = params;
        }
      });
      this.closePopup();
    },
  },
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
