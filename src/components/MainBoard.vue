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
        <div class="flex">
          <div class="handle title-holder">
            <h4 v-show="!(editMode === element._id)">{{ element.title }}</h4>
            <textarea
              :ref="setItemRef"
              v-show="editMode === element._id"
              v-model="element.title"
              @blur="validateCardDetails(element._id, element.title)"
            ></textarea>
          </div>
          <button v-show="!(editMode === element._id)" @click="toggleEditMode(element._id)">Edit</button>
          <button v-show="editMode === element._id" @click="toggleEditMode(element._id)">Del</button>
        </div>
        <div class="card">
          <draggable
            v-model="element.value"
            item-key="id"
            group="card"
            ghost-class="ghost"
            drag-class="drag"
            @end="$emit('syncData')"
          >
            <template #item="{ element }">
              <div class="list-item" @click="viewTask(element._id)">
                <p>{{ resizeNameLength(element.name) }}</p>
              </div>
            </template>
          </draggable>
          <div @click="newTask(element._id)" class="add-card-button">
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
  inject: ["listArray", "fetchData", "syncData"],
  components: {
    draggable,
  },
  data() {
    return {
      drag: false,
      editMode: "",
      itemRefs: [],
    };
  },
  methods: {
    setItemRef(el) {
      if (el) {
        this.itemRefs.push(el);
      }
    },
    toggleEditMode(id) {
      this.editMode = id;
      setInterval(() => {
        this.itemRefs[0].focus();
      },5);
    },
    newTask(id) {
      this.$emit("newTask", id);
    },
    viewTask(id) {
      this.$emit("viewTask", id);
    },
    resizeNameLength(name) {
      if (name.length > 70) {
        return name.substring(0, 70) + "...";
      }
      return name;
    },
    async validateCardDetails(id, title) {
      if (title === "") {
        this.fetchData();
      } else {
        this.syncData();
      }
      this.toggleEditMode("");
    },
  },
  beforeUpdate() {
    this.itemRefs = [];
  },
  updated() {
    console.log(this.itemRefs);
  },
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

.handle {
  cursor: pointer;
}

.title-holder {
  width: 210px;
  margin-right: 5px;
  margin-bottom: 15px;
  max-height: 24px;
}

button{
  margin-bottom: 15px;
}

p {
  margin: 0px;
}

h4 {
  cursor: pointer;
  margin: 0px;
  line-height: 28px;
  font-size: 20px;
  font-family: "Circular Std Bold";
}

textarea {
  line-height: 24px;
  font-size: 20px;
  font-family: "Circular Std Bold";
  padding: 2px 0px;
  margin: 0px;
  width: 100%;
  height: 24px;
  resize: none;
  /* border: none; */
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
  background: #e5ebf7;
  color: #e5ebf7;
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

.ghost,
.sortable-ghost {
  opacity: 0;
}
</style>