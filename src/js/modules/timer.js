export default function timer(timerSelector, deadline) {
  function getTimer(endtime){
    const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t/(1000*60*60*24)),
        hours = Math.floor(t/(1000*60*60)%24),
        minutes = Math.floor(t/(1000*60)%60),
        seconds = Math.floor((t/1000)%60);
    
    return{
        'total' : t,
        'days' : days,
        'hourse' : hours,
        'minutes' : minutes,
        'seconds' : seconds 
    };
    
    }
    
    function setClock (selector, endtime){
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hourse = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    const timeInterval = setInterval(updateClock, 1000);
    
    updateClock();
    
    function updateClock(){
        const t = getTimer(endtime);
    
        days.innerHTML = getZero(t.days);
        hourse.innerHTML = getZero(t.hourse);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);
    
        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    
    }
    }
    
    setClock(timerSelector, deadline);
}

export function getZero(num){
  if(num >= 0 && num < 10){
      return '0' + num;
  }else {
      return num;
  }
}