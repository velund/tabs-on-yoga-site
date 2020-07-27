    
function settclockk(id, endtime){
    console.log('jujujujuj');
    setClock(id, endtime);
    function calcTime(endtime){
        let milsec = Date.parse(endtime) - Date.parse(new Date()),
            secs = 0, mins = 0, hours = 0, days = 0;
        if (milsec>0){
            secs = (Math.floor(milsec/1000))%60;
            mins = (Math.floor(milsec/(1000*60)))%60;
            hours = (Math.floor(milsec/(1000*60*60))%24);
            days = (Math.floor(milsec/(1000*60*60*24)));
        }    
        let timeData  = {
            milliseconds: milsec,
            seconds: secs,
            minutes: mins,
            hours: hours,
            days: days
        };
        return timeData;
    
    }
    
    function setClock(id, endtime){
        console.log('inside setclock function');
        let t = document.getElementById(id),
            seconds = t.querySelector('.seconds'),
            minutes = t.querySelector('.minutes'),
            hours = t.querySelector('.hours'),
            days = t.querySelector('.days');
        if (calcTime(endtime).milliseconds>1000){
             setInterval(updateClock, 1000);
            
            
        }else {
            updateClock();
        }
        
        function updateClock(){
            seconds.textContent = addZero(calcTime(endtime).seconds);
            minutes.textContent = addZero(calcTime(endtime).minutes);
            hours.textContent = addZero(calcTime(endtime).hours);
            days.textContent = addZero(calcTime(endtime).days);
            
        }
        function addZero(num){
            if (num<10) {
                return ('0'+num);
            }else {return num;}
        }
    }
    
}

module.exports = settclockk;


