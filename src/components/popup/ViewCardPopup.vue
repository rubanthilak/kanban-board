<template>
  <the-popup
    @close="closePopup"
    :open="open"
  >
    <template #header>
        <input type="text" v-model="newCardTitle" placeholder="Title" />
    </template>
    <template #default>
      <div>
        <p>Description</p>
        <textarea
          v-model="newCardDesc"
          placeholder="Description"
          rows="5"
        ></textarea>
        <p class="error-text" v-show="showError">* All Fields Required 👿</p>
      </div>
    </template>
    <template #actions>
      <button class="update-btn" @click="ValidateNewCard">Update</button>
      <button class="close-btn" @click="closePopup">Close</button>
    </template>
  </the-popup>
</template>

<script>
export default {
  inject: ["closePopup", "updateCardDetails", "listArray"],
  props: ["open", "currentCardId"],
  data() {
    return {
      newCardTitle: "",
      newCardDesc: "",
      newCardId: null,
      showError: false,
    };
  },
  methods: {
    ValidateNewCard() {
      if (this.newCardTitle === "" || this.newCardDesc === "") {
        this.showError = true;
      } else {
        const temp = {
          name: this.newCardTitle,
          description: this.newCardDesc,
          id: this.newCardId,
        };
        this.updateCardDetails(temp);
      }
    }
  },
  beforeUpdate(){
     this.listArray.forEach((board) => {
        const index = board.value.findIndex((card) => card.id === this.currentCardId);
        if (index !== -1) {
          this.newCardId = board.value[index].id;
          this.newCardTitle = board.value[index].name;
          this.newCardDesc = board.value[index].description;
        }
    });
  }
};
</script>

<style scoped>
.error-text {
  color: red;
  margin: 5px 0px 0px 0px;
}

.rm-mb{
  margin-bottom: 5px;
}

input {
  width: 400px;
  font-family: "Circular Std Bold";
  font-size: 32px;
  display: block;
  border: none;
}
textarea {
  font-family: "Circular Std Book";
  width: 400px;
  padding: 10px 11px;
  margin: 0px;
  font-size: 16px;
  resize: none;
  background: #f4f7fd;
  border: none;
  border-radius: 5px;

}
button {
  padding: 10px 30px;
  font-size: 16px;
  font-family: "Circular Std Medium";
  color: white;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
}

.update-btn {
  background: #2674fa;
  margin-top: 25px;
  margin-right: 15px;
}

.close-btn {
  color: #f53a53;
  background: white;
  box-shadow: none;
  transition: 0.3s;
  padding: 0px;
}

</style>