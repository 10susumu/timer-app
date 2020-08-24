const WDig = (num) => {
  num = ("0" + num).slice(-2);
 return num;
}

const timer = () => {
  const nowTime = new Date();
  const nowHour = WDig(nowTime.getHours());
  const nowMin = WDig(nowTime.getMinutes());
  const hhmm = nowHour + ":" + nowMin;
  document.getElementById("now-time").innerHTML = hhmm;
  
  const forms = document.getElementsByClassName("set-times");
  const maxnum = forms.item(0).childElementCount - 1;
  const firstnum = forms.item(0).children.item(0).getAttribute("id")
  const lastnum = forms.item(0).children.item(maxnum).getAttribute("id")
  for (let i = firstnum; i <= (lastnum); i++){
    const form = document.getElementsByClassName("set-time"+i);
    if (form.item(0).getAttribute("value") == hhmm ){
      alert("じかんですよ");
    } else {
    }
  }
}
    


setInterval(timer, 10000)
window.addEventListener("load", timer);
