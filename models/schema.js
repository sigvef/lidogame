var mongoose = require('mongoose'), Schema = mongoose.Schema, PlayerSchema, Player;

//Connect mongoose to the database
var db = mongoose.createConnection('localhost', 'test');
db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function () {
    PlayerSchema = new mongoose.Schema({ name: String});
    Player = db.model('Player', PlayerSchema);
//});

// Get an item by ID
exports.getItems = function(handlers) {
    return Player.find(function(err, list) {
        if (!err) {
            handlers.success(list);
        } else {
            handlers.error(err);
        }
    });
};
exports.addItem = function(data, handlers) {
    var doc = new Player();
    doc.name = data.name;
    return doc.save(function(err, data) {
        if (!err) {
            handlers.success(data);
        } else {
            handlers.error(err);
        }
    });
};
