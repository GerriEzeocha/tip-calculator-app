var billInput = document.getElementById("bill_total")
let pplInput = document.getElementById("num_ppl");
const resetBtn = document.getElementById("reset");

let bill;
let numOfppl;
const tips = document.querySelectorAll('input[type=radio');



tips.forEach(tip=> {
    tip.addEventListener("click", function(e){
        console.log(tip.value);
    });
});



/**bill input and validation */

billInput.addEventListener("focusout", function(e){
    if((this.value <= 0) || isNaN(this.value)){
        console.log("less than 1");
        billInput.classList.add("err_border");
    }
    else{
        console.log("valid number");
        billInput.classList.remove("err_border");
    }
})

billInput.addEventListener("focusin", function(e){
    resetBtn.classList.add("btn_enabled");
    resetBtn.disabled = false;  
    billInput.classList.remove("err_border");
});

function validate(num){
    
}


/**reseting form */

resetBtn.addEventListener("click", function(e){
    localStorage.clear();
    billInput.value = "";
    pplInput.value = ""
    tips.forEach(tip => {
        tip.checked = false;
    });
    location.reload()
});