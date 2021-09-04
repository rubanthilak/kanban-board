<template>
  <the-popup @close="close" :open="open">
    <template #default>
        <h2>Are you sure ?</h2>
    </template>
    <template #actions>
      <button class="close-btn" @click="_deleteCard">Delete</button>
      <button class="del-btn" @click="close">Cancel</button>
    </template>
  </the-popup>
</template>


<script>
export default {
  inject: ["closePopup","deleteCard"],
  props: ["open"],
  methods: {
    _deleteCard(){
      this.deleteCard();
    },
    close() {
      this.closePopup();
    },
  },
};
</script>

<style scoped>

h2{
    margin: 0px;
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

.del-btn {
  background: #f53a53;
}

.close-btn {
  background: #2674fa;
}

</style>