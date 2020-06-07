window.addEventListener('DOMContentLoaded',function(){
    'use strict';
    let Tabs = document.querySelectorAll('.info-header-tab'),
        TabsContents = document.querySelectorAll('.info-tabcontent'),
        tabsWrapper = document.querySelector('.info-header');
    
    function hideTabConent (a){
        for (let i=a; i<TabsContents.length; i++){
            TabsContents[i].classList.remove('show');
            TabsContents[i].classList.add('hide');
        }
    }
    hideTabConent(1);
    function showTabContent(b){
        if (TabsContents[b].classList.contains('hide')){
            TabsContents[b].classList.remove('hide');
            TabsContents[b].classList.add('show'); 
        }
    }
    tabsWrapper.addEventListener('click', function(e){
        let target = e.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i=0; i<Tabs.length; i++){
                if (target == Tabs[i]){
                    hideTabConent(0);
                    showTabContent(i);
                    break;
                }
            }

            
        }
    });
    



});
