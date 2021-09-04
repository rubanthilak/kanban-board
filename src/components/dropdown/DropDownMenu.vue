<template>
  <div class="wrapper" v-click-outside="closeMenu">
    <div
      class="icon menu-icon"
      v-show="!dropDownFlag"
      @click="toggleMenu"
    ></div>
    <div
      class="icon close-icon"
      v-show="dropDownFlag"
      @click="toggleMenu"
    ></div>
    <transition name="dropdown">
      <div class="drop-down" v-if="dropDownFlag">
        <div class="drop-down-menu" @click="triggerAction('edit')">
          <div class="icon edit-icon"></div>
          <p>Edit Card</p>
        </div>
        <div class="drop-down-menu" @click="triggerAction('delete')">
          <div class="icon delete-icon"></div>
          <p>Delete Card</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropDownFlag: false,
    };
  },
  methods: {
    toggleMenu() {
      this.dropDownFlag = !this.dropDownFlag;
    },
    closeMenu(){
      if(this.dropDownFlag){
        this.dropDownFlag = false
      }
    },
    triggerAction(string){
      this.dropDownFlag = false;
      this.$emit(string);
    }
  },
};
</script>

<style scoped>

.wrapper{
  position: relative;
}

.drop-down {
  position: absolute;
  top: 30px;
  right: 0px;
  background: white;
  z-index: 1;
  box-shadow: 0px 3px 10px #00000028;
  border-radius: 5px;
  overflow: hidden;
  width: 150px;
}

.drop-down-menu {
  display: flex;
  padding: 0px 15px;
  justify-content: baseline;
  transition: 0.15s;
  align-items: center;
  cursor: pointer;
}

.drop-down-menu:last-of-type {
  padding: 0px 15px;
}

.drop-down-menu:hover {
  background: #eef3f9;
}

.drop-down-menu .icon {
  margin: 0px;
}

.drop-down-menu p {
  margin-left: 10px;
  vertical-align: text-bottom;
  line-height: 12px;
  font-family: font-bold;
}

/* // Dropdown Menu Animation */
.dropdown-enter-active {
  animation: modal 0.15s ease-in;
}

.dropdown-leave-active {
  animation: modal 0.15s ease-in reverse;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

.icon {
  height: 20px;
  width: 20px;
  max-height: 20px;
  max-width: 20px;
  background: black;
  margin-top: 4px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.3s;
}

.menu-icon {
  background: url("../../assets/icons/menu.png") no-repeat;
  background-size: 100%;
  opacity: 0.35;
  margin-top: 14px;
  margin-bottom: 5px;
}

.menu-icon:hover {
  background: url("../../assets/icons/menu_hover.png") no-repeat;
  background-size: 100%;
  opacity: 1;
}

.edit-icon {
  background: url("../../assets/icons/write.png") no-repeat;
  background-size: cover;
  opacity: 0.9;
}

.edit-icon:hover,
.drop-down-menu:hover .edit-icon {
  background: url("../../assets/icons/write_hover.png") no-repeat;
  background-size: cover;
  opacity: 1;
}

.delete-icon {
  background: url("../../assets/icons/delete.png") no-repeat;
  background-size: cover;
  opacity: 0.9;
}

.delete-icon:hover,
.drop-down-menu:hover .delete-icon {
  background: url("../../assets/icons/delete_hover.png") no-repeat;
  background-size: cover;
  opacity: 1;
}

.close-icon {
  background: url("../../assets/icons/close.png") no-repeat;
  background-size: cover;
}

.close-icon:hover {
  background: url("../../assets/icons/close_hover.png") no-repeat;
  background-size: cover;
}
</style>