<template>
  <the-popup :title="'New Card'" @close="closePopup" :open="open">
    <template #default>
      <input type="text" v-model="newCardTitle" placeholder="Title"/>
      <textarea v-model="newCardDesc" placeholder="Description" rows="5"></textarea>
      <p class="error-text" v-show="showError">* All Fields Required 👿</p>
    </template>
    <template #actions>
      <button class="add-btn" @click="ValidateNewCard">Add</button>
      <button class="close-btn" @click="closePopup">Cancel</button>
    </template>
  </the-popup>
</template>

<script>
export default {
  inject: ["createNewCard", "closePopup",],
  props:["open"],
  data(){
      return {
          newCardTitle: "",
          newCardDesc: "",
          showError: false
      }
  },
  methods: {
      ValidateNewCard(){
          if(this.newCardTitle === "" || this.newCardDesc === ""){
              this.showError= true;
          }
          else{
              this.createNewCard(this.newCardTitle, this.newCardDesc);
          }
      }
  }
};
</script>


<style scoped>
.error-text {
  color: red;
  margin: 5px 0px 0px 0px;
}
input {
  width: 400px;
  padding: 10px 10px;
  margin: 20px 0px 0px 0px;
  font-family: "Circular Std Book";
  font-size: 16px;
  display: block;
}
textarea{
  font-family: "Circular Std Book";
  width: 400px;
  padding: 10px 11px;
  margin: 20px 0px 0px 0px;
  font-size: 16px;
  resize: none;
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
  transition: 0.3s;
  padding: 0px;
}
</style>