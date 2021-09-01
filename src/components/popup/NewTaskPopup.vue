<template>
  <the-popup :title="'New Task'" @close="close" :open="open">
    <template #default>
      <input type="text" v-model="newTaskTitle" placeholder="Title" />
      <textarea
        v-model="newTaskDesc"
        placeholder="Description"
        rows="5"
      ></textarea>
      <p class="error-text" v-show="showError">* All Fields Required 👿</p>
    </template>
    <template #actions>
      <button class="add-btn" @click="ValidateNewTask">Create</button>
      <button class="close-btn" @click="close">Cancel</button>
    </template>
  </the-popup>
</template>

<script>
export default {
  inject: ["createNewTask", "closePopup"],
  props: ["open"],
  data() {
    return {
      newTaskTitle: "",
      newTaskDesc: "",
      showError: false,
    };
  },
  methods: {
    ValidateNewTask() {
      if (this.newTaskTitle === "" || this.newTaskDesc === "") {
        this.showError = true;
      } else {
        this.createNewTask(this.newTaskTitle, this.newTaskDesc);
        setTimeout(() => {
          this.newTaskTitle = "";
          this.newTaskDesc = "";
        }, 100);
      }
    },
    close(){
      this.showError = false;
      this.closePopup();
    }
  },
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
  font-family: font-regular;
  font-size: 16px;
  display: block;
   border: 2px solid #00000070;
  border-radius: 5px;
}
textarea {
  font-family: font-regular;
  width: 400px;
  padding: 10px 11px;
  margin: 20px 0px 0px 0px;
  font-size: 16px;
  resize: none;
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