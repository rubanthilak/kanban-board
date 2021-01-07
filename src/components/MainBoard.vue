<template>
  <draggable
    v-model="listArray"
    item-key="name"
    handle=".handle"
    class="row"
    ghost-class="ghost"
    drag-class="drag"
    :force-fallback="true"
  >
    <template #item="{ element }">
      <div class="board">
        <div class="card">
          <h2 class="handle">{{ element.name }}</h2>
          <draggable
            :list="element.value"
            item-key="id"
            group="board"
            drag-class="drag"
            ghost-class="ghost"
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
  methods: {
    newCard(id){
      this.$emit('newCard',id);
    },
    viewCard(card){
      this.$emit('viewCard',card);
    },
    resizeNameLength(name){
      if(name.length > 70){
        return name.substring(0,70) + "..."
      }
      return name;
    }
  }
};
</script>

<style scoped>
.row {
  width: auto;
  min-height: calc(100vh - 110px);
  padding: 24px;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
}

p{
  margin: 0px;
}

h2 {
  cursor: pointer;
  margin: 0px;
}

.card {
  box-shadow: 0px 0px 15px #22222227;
  padding: 25px;
  background: white;
  margin-right: 25px;
  margin-bottom: 25px;
  min-width: 250px;
  max-width: 250px;
  float: left;
}

.list-item {
  padding: 20px 15px;
  margin: 10px 0px;
  box-shadow: 0px 0px 10px #2222221e;
  border-radius: 7px;
  cursor: pointer;
  background: #000000;
  color: white;
  word-wrap: break-word;
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

.ghost {
  opacity: 0;
}

.drag,
.sortable-drag {
  opacity: 1;
}
</style>