<template>
  <teleport to="body">
    <div class="overlay" @click="$emit('close')"></div>
    <dialog open>
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
  </teleport>
</template>

<script>
export default {
  props: ["title"],
  emits: ["close"]
};
</script>

<style scoped>
.overlay{
    position: absolute;
    background: #00000083;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
}

h1{
  font-family: "Circular Std Bold";
  margin: 0px;
}

dialog{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto;
    border: none;
    font-family: "Circular Std Book";
    min-width: 400px;
    padding: 25px;
}
</style>