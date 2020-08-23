const WDig = (num) => {
  num = ("0" + num).slice(-2);
 return num;
}

const timer = () => {
  const nowTime = new Date();
  const nowHour = WDig(nowTime.getHours());
  const nowMin = WDig(nowTime.getMinutes());
  const nowSec = WDig(nowTime.getSeconds());
  const msg = nowHour + ":" + nowMin + ":" + nowSec;
  const hhmm = nowHour + ":" + nowMin;
  document.getElementById("now-time").innerHTML = msg;
  
  const forms = document.getElementsByClassName("set-times");
  const maxnum = forms.item(0).childElementCount + 1;
  console.log(maxnum)
  for (let i = 1; i < maxnum; i++){
    const form = document.getElementsByClassName("set-time"+i);
    console.log(form.item(0).getAttribute("value"));
    if (form.item(0).getAttribute("value") == hhmm ){
      alert("じかんですよ");
    }
  }
}
    


setInterval(timer, 10000)
window.addEventListener("load", timer);
