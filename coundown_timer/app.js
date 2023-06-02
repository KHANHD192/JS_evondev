window.addEventListener('load',function(){
  let number = document.querySelectorAll('.number');
  
  let date = "Fri Jun 04 2023 20:02:33 GMT+0700 (Indochina Time)";
  let timeEnd = new Date (date) ;
  let days,hours,minutes,seconds;
  
  function caculateTime(){
      let timeNow = new Date();
      const timeRemaning  = parseInt(timeEnd.getTime() - timeNow.getTime())/1000;
      if(timeRemaning > 0 ){
        days = parseInt(timeRemaning/86400);
        number[0].innerText = `0${days}`.slice(-2);
        hours= parseInt((timeRemaning/86400 - days)*24);
        number[1].innerText =  `0${hours}`.slice(-2);
        minutes = parseInt(((timeRemaning/86400 - days)*24 - hours)* 60);
        number[2].innerText=`0${minutes}`.slice(-2);
        seconds = parseInt((((timeRemaning/86400 - days)*24 - hours)* 60 - minutes)*60);
        number[3].innerText = `0${seconds}`.slice(-2);
    }else{
        return;
    }
 }

 setInterval(function(){
    caculateTime();
 },1000);


})
