setInterval(function(){
    let e = document.getElementsByClassName("handler")[0]
    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    e.innerHTML =h +":"+m+":"+s
      
    },1000)