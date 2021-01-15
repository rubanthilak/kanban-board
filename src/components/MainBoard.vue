<template>
  <draggable
    :list="listArray"
    item-key="_id"
    handle=".handle"
    class="row"
    ghost-class="ghost"
    drag-class="drag"
    :force-fallback="true"
    @end="$emit('syncData')"
  >
    <template #item="{ element }">
      <div class="board">
        <h4 class="handle">{{ element.title }}</h4>
        <div class="card">
          <draggable
            v-model="element.value"
            item-key="id"
            group= "board"
            ghost-class="ghost"
            drag-class="drag"
            @end="$emit('syncData')"
          >
            <template #item="{ element }">
              <div class="list-item" @click="viewCard(element._id)">
                <p>{{ resizeNameLength(element.name) }}</p>
              </div>
            </template>
          </draggable>
          <div @click="newCard(element._id)" class="add-card-button">
            <p><span>+</span> Add Task</p>
          </div>
        </div>
      </div>
    </template>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
export default {
  inject: ['listArray'],
  components: {
    draggable,
  },
  data(){
    return {
      drag: false,
    }
  },
  methods: {
    newCard(id) {
      this.$emit("newCard",id);
    },
    viewCard(id) {
      this.$emit("viewCard",id);
    },
    resizeNameLength(name) {
      if (name.length > 70) {
        return name.substring(0, 70) + "...";
      }
      return name;
    },
  }
};
</script>

<style scoped>
.row {
  width: auto;
  min-height: calc(100vh - 335px);
  padding: 25px;
  display: flex;
  flex-direction: row;
  margin-top: 270px;
}

p {
  margin: 0px;
}

h4 {
  cursor: pointer;
  margin: 0px;
  font-size: 20px;
  font-family: "Circular Std Bold";
  margin-bottom: 15px;
  line-height: 24px;
}

.card {
  padding: 20px;
  background: #f4f7fd;
  margin-right: 25px;
  margin-bottom: 25px;
  min-width: 220px;
  max-width: 220px;
  float: left;
  transition: 0.5s;
  border-radius: 10px;
}

.list-item {
  padding: 10px 15px;
  margin: 0px 0px 15px 0px;
  box-shadow: 0px 0px 10px #b8b8b82a;
  cursor: pointer;
  background: white;
  color: black;
  word-wrap: break-word;
  border-radius: 5px;
}

.add-card-button {
  padding: 8px;
  background: #E5EBF7;
  color: #E5EBF7;
  border-radius: 5px;
  font-family: "Circular Std Bold";
  cursor: pointer;
  text-align: center;
  margin-top: 15px;
}

.add-card-button p {
  margin: 0px;
  text-align: center;
  color: #2674fa;
}

.drag,
.sortable-drag {
  opacity: 1;
}

.ghost, .sortable-ghost {
  opacity: 0;
}

</style>