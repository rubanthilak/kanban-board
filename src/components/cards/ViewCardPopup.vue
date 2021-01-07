<template>
  <the-dialog-box
    :title="editMode ? 'Edit Card' : card.name"
    @close="toggleViewCard"
  >
    <template #default>
      <div v-if="!editMode">
        <p>Description</p>
        <p>{{ card.description }}</p>
      </div>
      <div v-else>
        <input type="text" v-model="newCardTitle" placeholder="Title" />
        <textarea
          v-model="newCardDesc"
          placeholder="Description"
          rows="5"
        ></textarea>
        <p class="error-text" v-show="showError">* All Fields Required 👿</p>
      </div>
    </template>
    <template #actions>
      <button class="edit-btn" v-if="!editMode" @click="toggleEditMode">
        Edit
      </button>
      <button class="update-btn" v-else @click="ValidateNewCard">Update</button>
      <button class="close-btn" @click="toggleViewCard">Close</button>
    </template>
  </the-dialog-box>
</template>

<script>
export default {
  inject: ["toggleNewCard",'toggleViewCard','updateCardDetails'],
  props:["card"],
  data(){
      return {
          newCardTitle: this.card.name,
          newCardDesc: this.card.description,
          showError: false,
          editMode: false
      }
  },
  methods: {
      ValidateNewCard(){
          if(this.newCardTitle === "" || this.newCardDesc === ""){
              this.showError= true;
          }
          else{
              const temp = {
                  name: this.newCardTitle,
                  description : this.newCardDesc,
                  id: this.card.id,
              };
              this.updateCardDetails(temp);
          }
      },
      toggleEditMode(){
          this.editMode = !this.editMode;
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
textarea {
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
  box-shadow: 0px 0px 8px #4141415b;
}

.edit-btn {
  background: black;
}

.update-btn {
  background: black;
}

.close-btn {
  color: #f53a53;
  background: white;
  box-shadow: none;
  transition: 0.3s;
  padding: 0px;
}

dialog {
  max-width: 400px;
}
</style>