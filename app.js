var date1 = new Date();
var date2 = new Date("02/12/2022");
var timed = date1.getTime() - date2.getTime(); 
var dayd = timed / (1000 * 3600 * 24);

if(dayd>=2){
    document.getElementById('counter').innerHTML = Math.floor(dayd) + ' DAYS SOBER';
}
else{
    document.getElementById('counter').innerHTML = Math.floor(dayd) + ' DAY SOBER';
}
  