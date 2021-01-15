<template>
 <the-popup :title="'New Board'" @close="closePopup" :open="open">
    <template #default>
      <input v-model="newBoardName" type="text" placeholder="Title" />
      <p class="error-text" v-show="showError">* Title require 👿</p>
    </template>
    <template #actions>
      <button class="add-btn" @click="validateBoardName">Create</button>
      <button class="close-btn" @click="closePopup">Cancel</button>
    </template>
  </the-popup>
</template>

<script>
export default {
  inject: ["createNewBoard", "closePopup"],
  props: ["open"],
  data() {
    return {
      newBoardName: "",
      showError: false,
    };
  },
  methods: {
    validateBoardName() {
      if (this.newBoardName === "") {
        this.showError = true;
      } else {
        this.createNewBoard(this.newBoardName.charAt(0).toUpperCase() + this.newBoardName.substring(1));
        setTimeout(() => {
          this.newBoardName = "";
        },100)
      }
    },
  },
};
</script>

<style scoped>
.error-text {
  color: red;
  margin: 5px 0px 0px 0px;
}
p {
  margin: 25px 0px 0px 0px;
}
input {
  width: 400px;
  padding: 10px 10px;
  margin: 20px 0px 0px 0px;
  font-family: "Circular Std Book";
  font-size: 16px;
}

button {
  margin-top: 25px;
  margin-right: 15px;
  padding: 10px 30px;
  font-size: 16px;
  font-family: "Circular Std Medium";
  color: white;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
}

.add-btn {
  background: #2674fa;
}

.close-btn {
  color: #f53a53;
  background: white;
  box-shadow: none;
  padding: 0px;
}

</style>