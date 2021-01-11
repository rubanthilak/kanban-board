<template>
  <div class="topbar">
    <h1>Hey, Welcome ...</h1>
    <div class="btn-holder">
      <button @click="$emit('addBoard')" class="add-btn">+ Add Board</button>
      <!-- <button class="set-btn">
        <img src="../assets/icons/settings.png" alt="icon" />
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  emits: ["addBoard"],
};
</script>

<style scoped>
.topbar {
  display: flex;
  flex-direction: column;
  padding: 70px 25px;
  justify-content: space-between;
  background-image: url("../assets/cover/cover1.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  width: calc(100vw - 50px);
  top: 0px;
  left: 0px;
}

h1 {
  margin: 0px;
  font-size: 56px;
  line-height: 56px;
  margin-bottom: 30px;
  color: white;
}

.btn-holder {
  margin: auto 0px;
  display: flex;
}

.add-btn {
  padding: 10px 15px;
  background: white;
  color: black;
  border: none;
  border-radius: 5px;
  font-family: "Circular Std Medium";
  font-size: 18px;
  margin-right: 10px;
  outline: none;
  cursor: pointer;
}

.set-btn {
  background: transparent;
  padding: 10px 12px;
  background: white;
  border: none;
  border-radius: 5px;
  margin: auto 0px;
  outline: none;
  cursor: pointer;
}

img {
  height: 22px;
  width: 22px;
}
</style>