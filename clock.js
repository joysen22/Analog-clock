const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function clock() {
  const date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  //   rotation calculation
  let hRotation = 30 * hh + mm / 2;
  let mRotation = 6 * mm;
  let sRotation = 6 * ss;
  //   difine rotate value hour,minute,second
  hour.style.transform = `rotate(${hRotation}deg)`;
  minute.style.transform = `rotate(${mRotation}deg)`;
  second.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(clock, 1000);
