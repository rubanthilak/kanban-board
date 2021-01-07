<template>
  <new-card-popup
    :board-id="newCardParentId"
    v-if="newCardVisible"
  ></new-card-popup>
  <view-card-popup
    :card="viewCard"
    v-if="viewCardVisible"
  ></view-card-popup>
  <new-board-popup
    :newBoardTitle="'New Board'"
    v-if="newBoardVisible"
  ></new-board-popup>
  <navigation-bar @add-board="toggleNewBoard"></navigation-bar>
  <main-board 
  @new-card="toggleNewCard($event)"
  @view-card="toggleViewCard($event)"
  ></main-board>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      listArray: this.listArray,
      toggleNewBoard: this.toggleNewBoard,
      toggleNewCard: this.toggleNewCard,
      toggleViewCard: this.toggleViewCard,
      createNewBoard: this.createNewBoard,
      createNewCard: this.createNewCard,
      updateCardDetails: this.updateCardDetails
    };
  },
  data() {
    return {
      newBoardVisible: false,
      newCardVisible: false,
      viewCardVisible: false,
      newCardParentId: null,
      viewCard: null,
      listArray: [
        {
          id: 1,
          name: "List 1",
          value: [
            { name: "John", id: 1, description: "Hello" },
            { name: "Joao", id: 2, description: "Hello" },
            { name: "Jean", id: 3, description: "Hello" },
            { name: "Gerard", id: 4, description: "Hello"  },
          ],
        },
        {
          id: 2,
          name: "List 2",
          value: [
            { name: "Juan", id: 5, description: "Hello" },
            { name: "Edgard", id: 6, description: "Hello" },
            { name: "Johnson", id: 7, description: "Hello" },
          ],
        },
        {
          id: 3,
          name: "List 3",
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
    toggleNewBoard() {
      this.newBoardVisible = !this.newBoardVisible;
    },
    toggleNewCard(value) {
      this.newCardVisible = !this.newCardVisible;
      this.newCardParentId = value;
    },
    toggleViewCard(card) {
      this.viewCardVisible = !this.viewCardVisible;
      this.viewCard = card;
    },
    createNewBoard(name) {
      this.listArray.push({
        name: name,
        value: [],
      });
      this.newBoardVisible = !this.newBoardVisible;
    },
    createNewCard(boardId, title, des) {
      const selectedItem = this.listArray.find((board) => board.id === boardId);
      selectedItem.value.push({
        id: Date.now().toString(),
        name: title,
        description: des,
      });
      this.newCardVisible = !this.newCardVisible;
      this.newCardParentId = null;
    },
    updateCardDetails(params){
      this.listArray.forEach((board) => {
        const index = board.value.findIndex(card => card.id === params.id);
        if(index !== -1){
          board.value[index] = params;
        }
      })  
      this.viewCardVisible= false;
      this.viewCard = null;
    }
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
  background: #f8f8f8;
  overflow-x: hidden;
}
</style>
