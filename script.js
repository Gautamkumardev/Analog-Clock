var counter = 0;
function setClock() {
counter ++;
var now = new Date(),
        then = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,0,0),
        mil = now.getTime() - then.getTime(); // difference in milliseconds

let hrs = (mil/(1000*60*60));
let mins = (hrs*60);
let secs = (mins*60);
//console.log(hrs, mins, secs);
  let secdeg = secs*6;
  let mindeg = mins*6 + secs/10;
  let hrsdeg = hrs*30 + mins/2;
 
 
 
  
  //console.log(hrsdeg, mindeg, secdeg);
 // console.log(`${hrsdeg}deg`);
 //console.log(document.getElementById('hour'));
  document.getElementById('hour').style.transform = `translate(50%) rotateZ(${hrsdeg}deg)`;
  
  
  document.getElementById('min').style.transform = `translate(50%) rotateZ(${mindeg}deg)`;
  
  
  document.getElementById('sec').style.transform = `translate(50%) rotateZ(${secdeg}deg)`;
    
    if (counter==2) {
      let startTransition = document.getElementsByClassName("hand");
    for (var i = 0; i < startTransition.length; i++) {
      startTransition[i].style.transition ='transform 300ms cubic-bezier( 0.68, -0.55, 0.265, 1.55 )';
      console.log(startTransition);
    }
      console.log(counter);
      
    }
}


     

setInterval(setClock,1000);

function switchMode() {
     let night = document.getElementById("night");
     let day = document.getElementById("day");
     let body = document.getElementById('body');
  if (night.classList.contains('light')){
          night.classList.remove('light');
          day.classList.remove('light');
          body.classList.remove('light');
          
            }
     else{
          night.classList.add('light');
          day.classList.add('light');
          body.classList.add('light');
   }

}
