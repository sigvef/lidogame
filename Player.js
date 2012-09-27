module.exports = Player;

function Player(){
    this.x = 0;
    this.y = 0;
    this.dx = 0;
    this.dy = 0;

    /* TODO: find out how the joystick works, and model it here */
    this.controllerState = {};
}

Player.prototype.update = function() {
    /* TODO: look at the controllerState, and act on it */

    this.x += this.dx;
    this.y += this.dy;
}

