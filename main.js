canvas = document.getElementById("myCanvas");
ctx.getContext("2d");

var mouseEvent = "empty" ; 
var last_postion_of_x , last_postion_of_y;
color = "black" ;
width_of_line = 1 ;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color = document.getElementById("color").nodeValue;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_x = e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("last position of x and y coordinates = ");
        console.log("x = "+ last_position_of_x+"y =  " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);               
        
        console.log("current_position_of_mouse_x = ");
        console.log( cuurrent_position_of_mouse_x ,current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;

}
