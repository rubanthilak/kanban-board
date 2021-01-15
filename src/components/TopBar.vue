<template>
  <div class="topbar">
    <div class="overlay"></div>
    <h1>Hey, Welcome ...</h1>
    <div class="content-holder">
      <button @click="$emit('addBoard')" class="add-btn">+ Add Board</button>
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
  background: #2674fa;
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
  z-index: 2;
}

.content-holder {
  margin: auto 0px;
  display: flex;
  z-index: 2;
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

.overlay{
  height: 100%;
  width: 100%;
  background: #00000091;
  position: absolute;
  top:0px;
  left: 0px;
  z-index: 1;
}
</style>