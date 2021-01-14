import PouchDB from 'pouchdb';

var db = new PouchDB('kanban');

const DatabaseHelper = {
    methods: {
        addBoard: function(title){
            var temp = {
                _id: new Date().toISOString(),
                title: title,
                value: []
            };
            db.put(temp, function callback(err, result) {
            if (!err) {
                console.log('Successfully posted a todo! '+ result);
            }
          });
        }
    }
}

export default DatabaseHelper;