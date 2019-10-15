//js
let sensor = new Accelerometer();
sensor.start();

sensor.onreading = () => {
    document.getElementById("acceleration_along_X").innerHTML=sensor.x;
    document.getElementById("acceleration_along_Y").innerHTML=sensor.y;
    document.getElementById("acceleration_along_Z").innerHTML=sensor.z;
}

sensor.onerror = event => console.log(event.error.name, event.error.message);