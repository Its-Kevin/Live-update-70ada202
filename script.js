const pi = 3.14;

function calculate() {
  let diameter = document.getElementById("diameter").value;

  let resultPeriphery = diameter * pi;
  let PeripherySpan = document.getElementById("resultPeriphery");

  PeripherySpan.innerText = resultPeriphery;

  let resultSurface = diameter * diameter * pi * 0.25;
  let surfaceSpan = document.getElementById("resultSurface");
  surfaceSpan.innerText = resultSurface;
}

setInterval(function() {
  let span = document.getElementById("time");
  let date = new Date();
  let time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  span.innerText = time;
}, 1000);
