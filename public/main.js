const captureVideoButton =
  document.querySelector('#screenshot .capture-button');
const screenshotButton = document.querySelector('#screenshot-button');
const img = document.querySelector('#screenshot img');
const video = document.querySelector('#screenshot video');

const canvas = document.createElement('canvas');

captureVideoButton.onclick = function() {
  navigator.mediaDevices.getUserMedia(constraints).
    then(handleSuccess).catch(handleError);
};

screenshotButton.onclick = video.onclick = function() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  // Other browsers will fall back to image/png
  img.src = canvas.toDataURL('image/webp');
};

function handleSuccess(stream) {
  screenshotButton.disabled = false;
  video.srcObject = stream;
}


//js
let sensor = new Accelerometer();
sensor.start();

sensor.onreading = () => {
    document.getElementById("acceleration_along_X").innerHTML=sensor.x;
    document.getElementById("acceleration_along_Y").innerHTML=sensor.y;
    document.getElementById("acceleration_along_Z").innerHTML=sensor.z;
}

sensor.onerror = event => console.log(event.error.name, event.error.message);