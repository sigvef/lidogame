net = require('net');

var connected = false;

var stdin = process.openStdin();
var client = net.connect(5000,"arkt.is",

    /* connect-listener */
    function(){
        console.log("connected!");
        connected = true;
    }
);

client.on("data", function(data){
    console.log(""+data);
});

client.on("end", function(){
    console.log("disconnected.");
    connected = false;
});

stdin.on("data", function(data){
    client.write("me> "+data);
});
