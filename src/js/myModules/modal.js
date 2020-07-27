function modalOpener(modal, Xclose, moreInformation){
    moreInformation.addEventListener('click', function(){
        modal.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
        });
    Xclose.addEventListener('click', function(){
        modal.style.display = 'none';
        moreInformation.classList.remove('more-splash');
        //document.body.style.overflow = '';
        });
    
}

module.exports = modalOpener;
