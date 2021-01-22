import PouchDB from "pouchdb";

var db = new PouchDB("board");

var obj = {
  _id: "boardlist",
  list: [],
};

db.put(obj);

export default {
  readBoard: async function() {
    const doc = await db.get("boardlist");
    var temp = doc.list;
    return temp;
  },
  updateBoard: async function(tempList){
    var board  = await db.get("boardlist");
    await db.put({
        _id:"boardlist",
        _rev:board._rev,
        list: tempList
    });
  },
  addCard: async function(temp) {
    var board  = await db.get("boardlist")
    board.list.push(temp);
    await db.put({
        _id:"boardlist",
        _rev:board._rev,
        list: board.list
    });
  },
  removeCard: async function(){

  },
  updateCard: async function(){

  },
  addTask: async function(id,task){
    var board  = await db.get("boardlist")
    board.list.forEach(board => {
        if(board._id === id){
            board.value.push(task);
        }
    });
    await db.put({
        _id:"boardlist",
        _rev:board._rev,
        list: board.list
    });
  },
  removeTask: async function(){

  },
  updateTask: async function(){

  },
};
