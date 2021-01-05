<template>
    <div>
        <h1>📚 Kanban Board</h1>
        <button>Add Card</button>
    </div>
</template>

<style scoped>
    div{
        width: calc( 100vw - 50px);
        height: 60px;
        box-shadow: 1px 5px 15px #8888888a;
        padding: 0px 25px;
        background: white;
    }
    h1{
        font-family: "Circular Std Bold";
        margin: 0px;
        line-height: 60px;
        float: left;
    }
    button {
        float: right;
        padding: 10px 25px;
        margin: 10px 0px;
        background-color: rgb(228, 87, 141);
        color: white;
        font-family: "Circular Std Bold";
        font-size: 16px;
        border: none;
        border-radius: 3px;
        outline: none;
        cursor: pointer;
        box-shadow: 0px 2px 8px #4141415b;
    }
</style>