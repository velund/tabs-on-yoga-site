window.addEventListener('DOMContentLoaded',function(){
    'use strict';
    let Tabs = document.querySelectorAll('.info-header-tab'),
        TabsContents = document.querySelectorAll('.info-tabcontent'),
        TabsWrapper = document.querySelector('.info-header');
    toggleTabs(Tabs, TabsContents, TabsWrapper);
    //setClock('timer', deadline);
    

});

// Tabs toggler function

function toggleTabs(tabs, contents, tabsWrapper){
    function hideTabConent (a){
        for (let i=a; i<contents.length; i++){
            contents[i].classList.remove('show');
            contents[i].classList.add('hide');
        }
    }
    hideTabConent(1);
    function showTabContent(b){
        if (contents[b].classList.contains('hide')){
            contents[b].classList.remove('hide');
            contents[b].classList.add('show'); 
        }
    }
    tabsWrapper.addEventListener('click', function(e){
        let target = e.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i=0; i<tabs.length; i++){
                if (target == tabs[i]){
                    hideTabConent(0);
                    showTabContent(i);
                    break;
                }
            }

            
        }
    });
}

// Timer function

let deadline = '2020-06-09';

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
    }
    return timeData;

}
console.log(calcTime(deadline).hours);
function setClock(id, endtime){
    let t = document.getElementById(id),
        seconds = t.querySelector('.seconds'),
        minutes = t.querySelector('.minutes'),
        hours = t.querySelector('.hours'),
        days = t.querySelector('.days');
    let timeInterval = setInterval(updateClock, 1000);
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
