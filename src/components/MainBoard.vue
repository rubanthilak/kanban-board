<template>
    <div class="row">
        <draggable
        :list="listArray"
        item-key="name"
        @start="dragging = true"
        @end="dragging = false"
        >
         <template #item="{ element }">
          <div class="column">
            <h3>{{ element.name }}</h3>
            <draggable
             :list="element.value"
             item-key="name"
             group="people"
            >
             <template #item="{ element, index }">
                 <div>
                     {{ element.name }} {{ index }}
                 </div>
             </template>
            </draggable>
          </div>
        </template>
        </draggable>
    </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
    components:{
        draggable
    },
    data() {
    return {
      dragging: false,
      listArray : [
        {
            name: "List 1",
            dragging: false,
            value : [
                { name: "John", id: 1 },
                { name: "Joao", id: 2 },
                { name: "Jean", id: 3 },
                { name: "Gerard", id: 4 } 
            ]
        },
        {
           name: "List 2",
           dragging: false,
           value: [
                { name: "Juan", id: 5 },
                { name: "Edgard", id: 6 },
                { name: "Johnson", id: 7 }
           ]
        }
      ]
    };
  },
}
</script>

<style scoped>

    .row div{
        display: flex;
        flex-direction: row;
        margin: 25px;
    }

    .row > div > div {
        flex-direction: column;
        cursor: pointer;
        margin: 0px;
    }

    .column div{
        display: flex;
        flex-direction: column;
    }
</style>