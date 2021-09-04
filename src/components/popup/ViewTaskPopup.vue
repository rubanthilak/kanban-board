<template>
  <the-popup
    @close="close"
    :open="open"
  >
    <template #header>
        <input type="text" v-model="newTaskTitle" placeholder="Title" />
    </template>
    <template #default>
      <div>
        <p>Description</p>
        <textarea
          v-model="newTaskDesc"
          placeholder="Description"
          rows="5"
        ></textarea>
        <p class="error-text" v-show="showError">* All Fields Required 👿</p>
      </div>
    </template>
    <template #actions>
      <button class="update-btn" @click="ValidateNewTask">Update</button>
      <button class="close-btn" @click="deleteTrigger">Delete</button>
    </template>
  </the-popup>
</template>

<script>
export default {
  inject: ["closePopup", "updateTaskDetails", "listArray","deleteTask"],
  props: ["open", "currentTaskId"],
  data() {
    return {
      newTaskTitle: "",
      newTaskDesc: "",
      newTaskId: null,
      showError: false,
    };
  },
  methods: {
    ValidateNewTask() {
      if (this.newTaskTitle.trim() === "" || this.newTaskDesc.trim() === "") {
        this.showError = true;
      } else {
        const temp = {
          name: this.newTaskTitle.trim(),
          description: this.newTaskDesc.trim(),
          _id: this.newTaskId,
        };
        this.updateTaskDetails(temp);
        this.showError = false;
      }
    },
    close(){
      this.showError = false;
      this.closePopup();
    },
    deleteTrigger(){
       this.showError = false;
       this.deleteTask(this.currentTaskId);
    }
  },
  beforeUpdate(){
     this.listArray.forEach((board) => {
        const index = board.value.findIndex((card) => card._id === this.currentTaskId);
        if (index !== -1) {
          this.newTaskId = board.value[index]._id;
          this.newTaskTitle = board.value[index].name;
          this.newTaskDesc = board.value[index].description;
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
  font-family: font-bold;
  font-size: 32px;
  display: block;
  border: none;
}
textarea {
  font-family: font-regular;
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
  font-family: font-bold;
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
  background: #f53a53;
}

</style>