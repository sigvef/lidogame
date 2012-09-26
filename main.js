/* some variables for time-keeping in the main loop */
var t = +new Date();
var dt = 0;
var old_time = t;

/* some global vars for now */

function setup(){
    /* all setup code goes here */
    console.log("setup");
}

function update(){
    /* this is the update function that gets called 50 fps */
    console.log("update");
}

/* our asynchrnous main game loop */
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
