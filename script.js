
function updateClock(){
const n=new Date();
clock.innerHTML=n.toLocaleTimeString([],{
hour:'2-digit',minute:'2-digit',second:'2-digit'
});
}
updateClock();
setInterval(updateClock,1000);
