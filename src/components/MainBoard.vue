<template>
  <draggable
    :list="listArray"
    item-key="id"
    handle=".handle"
    class="row"
    ghost-class="ghost"
    drag-class="drag"
    :force-fallback="true"
  >
    <template #item="{ element }">
      <div class="board">
        <div class="card">
          <h4 class="handle">{{ element.name }}</h4>
          <draggable
            v-model="element.value"
            item-key="id"
            group= "board"
            ghost-class="ghost"
            drag-class="drag"
          >
            <template #item="{ element }">
              <div class="list-item" @click="viewCard(element)">
                <p>{{ resizeNameLength(element.name) }}</p>
              </div>
            </template>
          </draggable>
          <div @click="newCard(element.id)" class="add-card-button">
            <p><span>+</span> Add Card</p>
          </div>
        </div>
      </div>
    </template>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
export default {
  inject: ["listArray"],
  components: {
    draggable,
  },
  data(){
    return {
      drag: false
    }
  },
  methods: {
    newCard(id) {
      this.$emit("newCard", id);
    },
    viewCard(card) {
      this.$emit("viewCard", card);
    },
    resizeNameLength(name) {
      if (name.length > 70) {
        return name.substring(0, 70) + "...";
      }
      return name;
    },
  },
};
</script>

<style scoped>
.row {
  width: auto;
  min-height: calc(100vh - 110px);
  padding: 24px;
  display: flex;
  flex-direction: row;
}

p {
  margin: 0px;
}

h4 {
  cursor: pointer;
  margin: 0px;
  font-size: 18px;
  font-family: "Circular Std Bold";
}

.card {
  box-shadow: 0px 0px 15px #22222227;
  padding: 20px;
  background: white;
  margin-right: 25px;
  margin-bottom: 25px;
  min-width: 250px;
  max-width: 250px;
  float: left;
  transition: 0.5s;
  border-radius: 5px;
}

.list-item {
  padding: 20px 15px;
  margin: 10px 0px;
  box-shadow: 0px 0px 10px #2222221e;
  cursor: pointer;
  background: #000000;
  color: white;
  word-wrap: break-word;
  border-radius: 5px;
}

.add-card-button {
  padding: 8px;
  border-style: dashed;
  border-color: #5050507a;
  border-width: 2px;
  color: #5050507a;
  border-radius: 5px;
  font-family: "Circular Std Bold";
  cursor: pointer;
}

.add-card-button p {
  margin: 0px;
}

.drag,
.sortable-drag {
  opacity: 1;
}

.ghost, .sortable-ghost {
  opacity: 0;
}

</style>