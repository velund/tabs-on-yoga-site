window.addEventListener('DOMContentLoaded',function(){
    'use strict';
    let infoTabs = document.querySelectorAll('.info-header-tab'),
        infoTabContents = document.querySelectorAll('.info-tabcontent'),
        infoHeader = document.querySelector('.info-header');
    
    function hideTabConent (a){
        for (let i=a; i<infoTabContents.length; i++){
            infoTabContents[i].classList.remove('show');
            infoTabContents[i].classList.add('hide');
        }
    }
    hideTabConent(1);
    function showTabContent(b){
        if (infoTabContents[b].classList.contains('hide')){
            infoTabContents[b].classList.remove('hide');
            infoTabContents[b].classList.add('show'); 
        }
    }
    infoHeader.addEventListener('click', function(e){
        let target = e.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i=0; i<infoTabs.length; i++){
                if (target == infoTabs[i]){
                    hideTabConent(0);
                    showTabContent(i);
                    break;
                }
            }

            
        }
    });
    



});
