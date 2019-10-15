//js
let sensor = new Accelerometer();
sensor.start();

sensor.onreading = () => {
    document.getElementById("acceleration_along_X").innerHTML="x:"+sensor.x;
    document.getElementById("acceleration_along_Y").innerHTML="y:"+sensor.y;
    document.getElementById("acceleration_along_Z").innerHTML="z:"+sensor.z;
}