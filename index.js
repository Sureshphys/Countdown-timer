const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
// const mseconds=document.querySelector("#mseconds");

const currentYear = new Date().getFullYear();
// console.log(currentYear);
const birthday = new Date(`June 24 ${currentYear} 00:00:00`);
// console.log(newYear);
// console.log(Date());
 
function CountTime()
{
  const currentDate = new Date();
  const diff = birthday - currentDate;
  // console.log(diff);
  const d = Math.floor(diff/1000/60/60/24);
  const h = Math.floor((diff/1000/60/60)%24);
  const m = Math.floor((diff/1000/60)%60);
  const s = Math.floor((diff/1000)%60);
  const ms = Math.floor(diff%1000);

  days.innerHTML = d<10?"0"+d:d;
  hours.innerHTML = h<10?"0"+h:h;
  minutes.innerHTML = m<10?"0"+m:m;
  seconds.innerHTML = s<10?"0"+s:s;
  // mseconds.innerHTML=ms<10?"0"+ms:ms;
}
setInterval(CountTime,1000);