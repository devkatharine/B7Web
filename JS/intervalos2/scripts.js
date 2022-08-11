let timer;

function iniciar(){
    timer = setInterval(showTime, 1000);

}

function pausar(){
    clearInterval(timer);
}    
    
    
    
    function showTime() {
      let d = new Date();
      let h = d.getHours();
      let m = d.getMinutes();
      let s = d.getSeconds();
      let txt = h+":"+m+":"+s;

      document.querySelector(".demo").innerHTML = txt;
    }

