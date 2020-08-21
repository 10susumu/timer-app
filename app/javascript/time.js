let WDig = (num) => {
  num = ("0" + num).slice(-2);
 return num;
}

const timer = () => {
  let nowTime = new Date();
  let nowHour = WDig(nowTime.getHours());
  let nowMin = WDig(nowTime.getMinutes());
  let nowSec = WDig(nowTime.getSeconds());
  let msg = nowHour + ":" + nowMin + ":" + nowSec;
  document.getElementById("now-time").innerHTML = msg;

  const form = document.getElementsByClassName("set-time")
  
  if (msg == ){

  }
}

setInterval(timer, 1000)
window.addEventListener("load", timer);
