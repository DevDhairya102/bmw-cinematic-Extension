
function tick(){
document.getElementById('clock').innerHTML=new Date().toLocaleTimeString([],{
hour:'2-digit',minute:'2-digit',second:'2-digit'
});
}
tick();
setInterval(tick,1000);
