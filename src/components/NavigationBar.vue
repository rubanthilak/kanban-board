<template>
    <div>
        <h1>📚 Sticky Notes</h1>
        <button @click="addBoard">+</button>
    </div>
</template>
<script>
export default {
    emits: ['addBoard'],
    methods: {
        addBoard(){
            this.$emit("addBoard")
        }
    }
}
</script>

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
        font-size: 24px;
        float: left;
    }
    button {
        float: right;
        padding: 5px 13px;
        margin: 10px 0px;
        background-color: #e4578d;
        color: white;
        font-family: "Circular Std Bold";
        font-size: 24px;
        border: none;
        border-radius: 100%;
        outline: none;
        cursor: pointer;
        box-shadow: 0px 2px 8px #4141415b;
    }
</style>