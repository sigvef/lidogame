var net = require('net');
var Room = require("./Room.js");
var Player = require("./Player.js");

/* some variables for time-keeping in the main loop */
var t = +new Date();
var dt = 0;
var old_time = t;

/* some global vars for now */
var room;
var clients;

function setup(){
    /* all setup code goes here */
    console.log("setup");

    room = new Room();
    clients = [];
    var port = process.argv[2] || 5000;
    net.createServer(function (socket){

            /* identify the client */
            socket.name = socket.remoteAddress + ":" + socket.remotePort 

            /* create a new player and add it to our clients list */
            var player = new Player();
            player.socket = socket;
            clients.push(player);
            console.log(player.socket.name,"has connected!");

            /* add our player to the room */
            Room.addPlayer(player);

            socket.on('data', function (data) {
                /* do stuff with the data later on */
                console.log(socket.name+">",data);
            });

            socket.on('end', function () {
                /* remove the client from the list of clients */
                clients.splice(clients.indexOf(socket), 1);

                /* also remove player from the room */
                room.removePlayer(player);

                console.log(player.socket.name,"has disconnected.");
            });
    }).listen(port);
    console.log("listenening on port",port,"...");
    console.log("setup complete!");
}

function update(){
    /* this is the update function that gets called 50 fps */
    room.update();
}

/* our asynchronous main game loop */
function loop(){

    /* cue the loop for another round */
    setTimeout(function(){loop();},0);

    /* calculate time since last execution */
    t = +new Date();
    dt += (t-old_time);
    old_time = t;

    /* if enough time has passed, call update the apropriate amount of time */
    while(dt>20){
        update();
        dt-= 20;
    }
};

/* kickoff! */
setup();
loop();
