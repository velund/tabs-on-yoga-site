function showCalcPrice(total, personInput, daysInput, selector){
    let personsSum = 0,
    daysSum = 0,
    totalSum =0;
    total.textContent = totalSum;
    personInput.addEventListener('input', function(){
        personsSum = +this.value;
        totalSum = personsSum*daysSum*100;
        if (daysInput !=''){
            total.textContent = totalSum; 
        }else{
            total.textContent = '0';
            totalSum = 0;
        }
        
    });
    daysInput.addEventListener('input', function(){
        daysSum = +this.value;
        totalSum = totalSum = personsSum*daysSum*100;
        if (personInput!=''){
            total.textContent = totalSum; 
        }else{
            total.textContent = '0';
            totalSum = 0;
        }

    });
    selector.addEventListener('change', function(){
        if (personInput !='' && daysInput !=''){
            let tot;
            tot = +this.options[this.selectedIndex].value*totalSum;
            total.textContent = tot;
        }else{
            totalSum = 0;
            total.textContent = '0';
        }
    });
}

module.exports = showCalcPrice;