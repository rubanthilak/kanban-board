<template>
  <the-popup :title="'New Card'" @close="close" :open="open">
    <template #default>
      <input v-model="newCardName" type="text" placeholder="Title" />
      <p class="error-text" v-show="showError">* Title require 👿</p>
    </template>
    <template #actions>
      <button class="add-btn" @click="validateCardName">Create</button>
      <button class="close-btn" @click="close">Cancel</button>
    </template>
  </the-popup>
</template>

<script>
export default {
  inject: ["createNewCard", "closePopup"],
  props: ["open"],
  data() {
    return {
      newCardName: "",
      showError: false,
    };
  },
  methods: {
    validateCardName() {
      if (this.newCardName === "") {
        this.showError = true;
      } else {
        this.createNewCard(
          this.newCardName.charAt(0).toUpperCase() +
            this.newCardName.substring(1)
        );
        setTimeout(() => {
          this.newCardName = "";
        }, 100);
      }
    },
    close() {
      this.closePopup();
      this.newCardName = "";
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
  font-family: font-regular;
  font-size: 16px;
  border: 2px solid #00000070;
  border-radius: 5px;
}

button {
  margin-top: 25px;
  margin-right: 15px;
  padding: 10px 30px;
  font-size: 16px;
  font-family: font-bold;
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
  background: #f53a53;
}
</style>