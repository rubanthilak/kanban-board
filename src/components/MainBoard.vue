<template>
  <draggable
    :list="listArray"
    item-key="name"
    handle=".handle"
    class="row"
    ghost-class="ghost"
  >
    <template #item="{ element }">
      <div class="board">
        <div class="card">
          <h2 class="handle">{{ element.name }}</h2>
          <draggable
            :list="element.value"
            item-key="name"
            group="people"
            drag-class="drag"
            ghost-class="ghost"
          >
            <template #item="{ element }">
              <div class="list-item">{{ element.name }}</div>
            </template>
          </draggable>
          <div class="add-card-button">
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
  components: {
    draggable,
  },
  data() {
    return {
      listArray: [
        {
          name: "List 1",
          value: [
            { name: "John", id: 1 },
            { name: "Joao", id: 2 },
            { name: "Jean", id: 3 },
            { name: "Gerard", id: 4 },
          ],
        },
        {
          name: "List 2",
          value: [
            { name: "Juan", id: 5 },
            { name: "Edgard", id: 6 },
            { name: "Johnson", id: 7 },
          ],
        },
        {
          name: "List 3",
          value: [
            { name: "Juan", id: 5 },
            { name: "Edgard", id: 6 },
            { name: "Johnson", id: 7 },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.row {
  width: auto;
  height: calc(100vh - 110px);
  padding: 24px;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
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
  float: left;
}

.list-item {
  padding: 20px 15px;
  margin: 10px 0px;
  box-shadow: 0px 0px 10px #2222221e;
  border-radius: 5px;
  cursor: pointer;
  background: #000000;
  color: white;
}

.add-card-button{
    padding: 10px;
    border-style: dashed;
    border-color:#5050507a;
    border-width: 2px;
    color:#5050507a;
    border-radius: 5px;
    font-family: "Circular Std Bold";
    cursor: pointer;
    transition-delay: 0.15s;
}

.add-card-button p{
    margin: 0px;
}

.add-card-button:hover{
    border-color:#e4578d;
    color:#e4578d;
}

.ghost {
   opacity: 0;
}

.drag {
   opacity: 1;
}

</style>