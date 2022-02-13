var date1 = new Date();
var date2 = new Date("02/12/2022");
var timed = date1.getTime() - date2.getTime(); 
var dayd = timed / (1000 * 3600 * 24);

if(dayd-1>=2){
    document.getElementById('counter').innerHTML = Math.floor(dayd)-1 + ' DAYS SOBER';
}
else{
    document.getElementById('counter').innerHTML = Math.floor(dayd)-1 + ' DAY SOBER';
}
  