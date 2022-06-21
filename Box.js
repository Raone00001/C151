// Creating a customized component box with changing position
AFRAME.registerComponent('box',{
    schema:{
        moving_box: {type: "number", default: 1}
    },
    tick: function() {
        this.data.moving_box = this.data.moving_box + 0.01
        var pos = this.el.getAtribute('position'); // Getting the position attribute and storing it (el = elements)
        pos.x = this.data.moving_box // Setting the initial position to the obj (moving_box)
        this.el.setAtribute("position", {x:pos.x, y:pos.y, z:pos.z}); // Setting and updating the positions
    }   
});