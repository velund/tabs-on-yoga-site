window.addEventListener('DOMContentLoaded',function(){
    'use strict';
    let Tabs = document.querySelectorAll('.info-header-tab'),
        TabsContents = document.querySelectorAll('.info-tabcontent'),
        TabsWrapper = document.querySelector('.info-header');
    toggleTabs(Tabs, TabsContents, TabsWrapper);
    
    

});

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
