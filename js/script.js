window.addEventListener('DOMContentLoaded',function(){
    'use strict';
    let Tabs = document.querySelectorAll('.info-header-tab'),
        TabsContents = document.querySelectorAll('.info-tabcontent'),
        TabsWrapper = document.querySelector('.info-header');
    toggleTabs(Tabs, TabsContents, TabsWrapper);
    setClock('timer', deadline);
    //modal
    let modal =  document.querySelector('.overlay'),
    Xclose = document.querySelector('.popup-close'),
    moreBTN = document.querySelector('.more');

    moreBTN.addEventListener('click', function(){
    modal.style.display = 'block';
    this.classList.add('more-splash');
    //document.body.style.overflow = 'hidden';
    });
    Xclose.addEventListener('click', function(){
    modal.style.display = 'none';
    moreBTN.classList.remove('more-splash');
    //document.body.style.overflow = '';
    });

    let mainForm = document.querySelector('.main-form'),
        form = document.getElementById('form'),
        inputs = document.querySelectorAll('input'),
        statusMessage = document.createElement('div');

    postToServer(mainForm, inputs, statusMessage);
    postToServer(form, inputs, statusMessage);

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
'use strict';
let deadline = '2020-08-09';

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
console.log(calcTime(deadline).days);
function setClock(id, endtime){
    let t = document.getElementById(id),
        seconds = t.querySelector('.seconds'),
        minutes = t.querySelector('.minutes'),
        hours = t.querySelector('.hours'),
        days = t.querySelector('.days');
    if (calcTime(endtime).milliseconds>1000){
        let timeInterval = setInterval(updateClock, 1000);
        
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



//post to server
function postToServer(mainForm, inputs, statusMessage){
    let message = {
        loading: 'loading...',
        loaded: 'Your request successfully sent',
        failure: ' problems occured, please try again '
    };
    
    
    statusMessage.classList.add('status');

    mainForm.addEventListener('submit', function(e){
        e.preventDefault();
        mainForm.appendChild(statusMessage);
        let formdata = new FormData(mainForm);
        function Poster(data){
            return new Promise(function(fullfil, reject){
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type','application-json','charset=utf-8');
                request.addEventListener('readystatechange', function(){
                    if (request.readyState < 4){
                        fullfil();
                    }else {
                        if (request.readyState === 4 && request.status == 200){
                            fullfil();
                        }else {
                            reject();
                        }
                    }
                }); //event listener to request
                request.send(data);
            }); //promise

        } // Poster func (returns promise)
        function clearData(){
            for (let i=0; i < inputs.length; i++){
                inputs[i].value = '';
            }
        }
        Poster(formdata).then(function(){console.log('loading'); statusMessage.textContent = message.loading;})
                        .then(function(){console.log('loaded'); statusMessage.textContent = message.loaded;})
                        .catch(function(){statusMessage.textContent = message.failure;})
                        .then(clearData);
    }); //eventlistener of main-form
} //postToServer func


 


