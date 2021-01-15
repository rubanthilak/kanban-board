import PouchDB from "pouchdb";

var db = new PouchDB("board");

var obj = {
  _id: "boardlist",
  list: [],
};

db.put(obj);

export default {
  addBoard: async function(title) {
    var temp = {
      _id: new Date().toISOString(),
      title: title,
      value: [],
    };
    var board  = await db.get("boardlist")
    board.list.push(temp);
    await db.put({
        _id:"boardlist",
        _rev:board._rev,
        list: board.list
    });
  },
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
  addCard: async function(id,card){
    var board  = await db.get("boardlist")
    board.list.forEach(board => {
        if(board._id === id){
            board.value.push(card);
        }
    });
    await db.put({
        _id:"boardlist",
        _rev:board._rev,
        list: board.list
    });
  },
};
