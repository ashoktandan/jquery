var i = setInterval(myTimer, 1000);
function myTimer() {
if(new Date().getMinutes()==9)
{
document.getElementById('demo').click();
clearInterval(i);
}
}
