module.exports = Room;
function Room(){
    this.players = [];
}

Room.prototype.update = function(){
    for(var i=0;i<this.players.length;i++){
        this.players[i].update();
    }
}

Room.prototype.addPlayer = function(player){
    this.players.push(player);
}

Room.prototype.addPlayer = function(player){
    this.players.splice(clients.indexOf(socket), 1);
}
