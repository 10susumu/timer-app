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
  const maxnum = forms.item(0).childElementCount;
  
  
  
  for (let i = 0; i < maxnum; i++){
    const form = forms.item(0).children.item(i).getAttribute("value");
    console.log(form)
      if (form == hhmm ){
        document.getElementById( 'sound-file' ).play() ;
      } else {
    }
  }
}
    


setInterval(timer, 30000)
window.addEventListener("load", timer);
