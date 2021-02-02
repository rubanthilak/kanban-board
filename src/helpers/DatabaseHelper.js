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
  removeCard: async function(id){
    var board  = await db.get("boardlist");
    const index = board.list.findIndex((b) => b._id === id);
    board.list.splice(index,1);
    await db.put({
      _id:"boardlist",
      _rev:board._rev,
      list: board.list
    });
  },
  updateCard: async function(){

  },
  addTask: async function(id,task){
    var boards  = await db.get("boardlist")
    boards.list.forEach(board => {
        if(board._id === id){
            board.value.push(task);
        }
    });
    await db.put({
        _id:"boardlist",
        _rev:boards._rev,
        list: boards.list
    });
  },
  removeTask: async function(){

  },
  updateTask: async function(){

  },
};
