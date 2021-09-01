<template>
  <teleport to="body">
    <transition name="overlay">
      <div v-if="open" class="overlay" @click="$emit('close')"></div>
    </transition>
    <transition name="popup">
      <dialog open v-if="open">
        <header>
          <slot name="header">
            <h1>{{ title }}</h1>
          </slot>
        </header>
        <section>
          <slot></slot>
        </section>
        <section>
          <slot name="actions"></slot>
        </section>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: ["title",'open'],
  emits: ["close"],
};
</script>

<style scoped>
.overlay {
  position: fixed;
  background: #00000083;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 9999;
}

h1 {
  font-family: font-bold;
  margin: 0px;
}

dialog {
  z-index: 99999;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto auto;
  border: none;
  font-family: font-regular;
  min-width: 300px;
  padding: 25px;
  border-radius: 10px;
}

.overlay-enter-active {
  transition: opaque 0.2s ease-out;
}

.overlay-leave-active {
  transition: opaque 0.2s ease-in reverse;
}

.popup-enter-active {
  animation: modal 0.3s ease-out;
}

.popup-leave-active {
  animation: modal 0.1s ease-in reverse;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
}

@keyframes opaque {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>