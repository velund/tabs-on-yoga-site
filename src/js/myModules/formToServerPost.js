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
module.exports = postToServer;