class ppp{
    constructor(){
var m_mine = document.getElementById("p-er");
m_mine.style.height = screen.height +"px"
if (screen.width<500) {
  m_mine.style.width = screen.width + "px"
}
let c_t = document.getElementById("c-t");
c_t.style.height = screen.height-300 +"px"
    }
}
onload = new ppp();
class muh{
  constructor(){
    this.DM = document.getElementById("DM");
    this.DM2 = document.getElementById("DM2");
this.t = document.getElementById("t");
this.me = document.getElementById("me");
this.le = document.getElementById("le");
this.re = document.getElementById("re");
this.are;
this.me.addEventListener("click",()=>{
  this.moon()});
  
    this.th.addEventListener("click",()=>{
      this.mmm()
});
  }
  moon(){
if(this.are == false){
this.DM.play();
this.are = true;
this.me.src="m.jpg"
}
else{
  this.DM.pause();
  this.are = false;
  this.me.src="l.png"
}
  }
  mmm(){
  let th =document.getElementById("th");
    th.body.style.background = "red"
  }
}

onload = new muh();