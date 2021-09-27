const billInput = document.getElementById("bill_total")
const pplInput = document.getElementById("num_ppl");
const resetBtn = document.getElementById("reset");
var tips = document.getElementsByName('tip');
const custInput = document.getElementById("custom");

let tipPerson = document.getElementById("tip_person");
let totalPerson = document.getElementById("total_person");


let bill ;
let numOfppl ;
let tipPercent ;


/**bill input and validation*/
billInput.addEventListener("focusin", function(e){
    resetBtn.classList.add("btn_enabled");
    resetBtn.disabled = false;  
    billInput.classList.remove("err_border");
}); 


billInput.addEventListener("focusout", function(e){
    if((this.value <= 0) || isNaN(this.value)){
        billInput.classList.add("err_border");
    }
    else{ 
        billInput.classList.remove("err_border");
        bill = parseInt(billInput.value);
        calculateTip();
    }
})

/**Ppl info and validation */
pplInput.addEventListener("focusout", function(e){
    if((this.value <= 0) || isNaN(this.value)){
        pplInput.classList.add("err_border");
        document.querySelector(".num_error").style.display = "block";
    }
    else{
        pplInput.classList.remove("err_border");
        document.querySelector(".num_error").style.display = "none";
        numOfppl = parseInt(pplInput.value);
        calculateTip();
    }
})

/** tips */
tips.forEach(tip=> {
    tip.addEventListener("click", function(e){
        custInput.value = ""
        if((billInput.value <= 0) || (pplInput.value <= 0)){
            tipPerson.value = "$0.00";
            totalPerson.value = "$0.00";
        } else{
           calculateTip(); 
        }
        
    })
});

custInput.addEventListener("focusin", function(e){
        tips.forEach(tip => {
            tip.checked = false;
        });
    })


function calculateTip(){
    if(custInput.value > 0){
        tipPercent = parseInt(custInput.value);  
      } else {
          tipPercent = (Array.from(tips).find(radio => radio.checked)).value;
      }
            //tipPercent = (Array.from(tips).find(radio => radio.checked)).value;
            tipPercent = tipPercent / 100;
            var total = bill + (bill * tipPercent);
            total = Math.round((total * 100)/100);
            tipPerson.value = "$"+((bill * tipPercent) / numOfppl).toFixed(2);
            totalPerson.value = "$"+(total / numOfppl).toFixed(2);   
    
}

/**reseting form */

resetBtn.addEventListener("click", function(e){
    location.reload()
    billInput.value = "";
    pplInput.value = "";
    custInput.value = ""
    tips.forEach(tip => {
        tip.checked = false;
    });
    totalPerson.value = "";
    tipPerson.value = "";

});