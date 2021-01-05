<template>
  <draggable :list="listArray" item-key="name" handle=".handle" class="row">
    <template #item="{ element }">
      <div class="board">
        <div class="card">
          <h2 class="handle">{{ element.name }}</h2>
          <draggable :list="element.value" item-key="name" group="people">
            <template #item="{ element }">
              <div class="list-item">{{ element.name }}</div>
            </template>
          </draggable>
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
  border-radius: 3px;
  cursor: pointer;
  background: white;
}

</style>