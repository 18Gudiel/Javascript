
// Assuming you have the variable accountBalance declared as follows:
var accountBalance = 300;
// Get the input element by its ID
var inputElement = document.getElementById("balance");

// Set the value of the input element to the value of the accountBalance variable
inputElement.value = accountBalance;


function paymentProcess(){
event.preventDefault();
var purchaseElement=document.getElementById("purchase");
var purchaseValue=parseFloat(purchaseElement.value);

if (purchaseValue<=accountBalance) {
var total=accountBalance-purchaseValue;
var container = document.getElementById("reaminBalance");
container.value=total;


    
} else {
alert("Your dont have enough funds to make this purchase")
}


}
