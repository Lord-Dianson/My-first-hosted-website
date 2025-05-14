//input elements variables
const country = document.querySelector('#userCountry');
const userName = document.querySelector('#userName');
const phone = document.querySelector('#user-tel');
const town = document.querySelector('#user-town');
const street = document.querySelector('#user-street');
const snailState = document.querySelectorAll('input[name ="snail-humid"]');
const packageSize = document.querySelector('.packageDropdown');
const serviceType = document.querySelector('.service-dropdown');
//disabled inputs variables
const quantity = document.querySelector('#Qty-control');
const totalAmount = document.querySelector('#total-amt');
//check and radio variables
const agree = document.querySelector('.agree');
const dried = document.querySelector('#dried-snails');
const wet = document.querySelector('#wet-snails');
// button variables
const submitBtn = document.querySelector('.form-btn-submit');
const addQuantityBtn = document.querySelector('.add-btn');
const subQuantityBtn = document.querySelector('.sub-btn');
//program variables
let stateVal;

//End variable declarations
submitBtn.disabled = true;
addQuantityBtn.onclick = () =>{
        quantity.value++;
        totalAmount.value = getTotalAmount(quantity.value,packageSize.value,serviceType.value,getRadioInputs()) + "frs";
    
}
subQuantityBtn.onclick = () =>{
 if(quantity.value <= 1){
    quantity.value =1;
 }
 else{
    quantity.value--;
 }
 totalAmount.value = getTotalAmount(quantity.value,packageSize.value,serviceType.value,getRadioInputs()) + "frs";
}
agree.addEventListener("change",()=>{
    if(agree.checked){
submitBtn.disabled = false;
    }
    else{
        submitBtn.disabled = true;
    }
});
phone.addEventListener("change",()=>{
    let x = phone.value;
if(x[0] !== "+"){
    alert("Please begin input with your country code 🙏🙏🙏😊😊")
}
});

submitBtn.onclick = () =>{
    if(country.value == ""){
        alert("You left out the country input field!!");
        return 0;
    }
    if(userName.value == ""){
        alert("You left out the name input field!!");
        return 0;
    }
    if(phone.value == ""){
        alert("You left out the phone input field!!");
        return 0;
    }
    if(town.value == ""){
        alert("You left out the town input field!!");
        return 0;
    }
    if(street.value == ""){
        alert("You left out the street input field!!");
        return 0;
    }
    if(isNaN(getRadioInputs())){
        alert("You have not chosen the state of your snail!!");
        return 0;
    }
    if(packageSize.value == ""){
        alert("Please select package size!!");
        return 0;
    }
    if(serviceType.value == ""){
        alert("Please choose what service you are ordering by!!");
        return 0;
    }
    if(quantity.value == ""){
        alert("Sorry, but cannot deliver if quantity is not known!!");
        return 0;
    }
    const userInput =`Hello, my name is *${userName.value}* and I am from *${country.value}*. I just made an order of *${quantity.value}* *${packageSize.value}* of *${(stateVal == 1)? "dried":"wet"}* snails at Mel's Snails website with a delivery price *${serviceType.value}${(serviceType.value == "negotiable")? "":"frs"}* on *${getDate()}*. For more details, I live in *${town.value}* at *${street.value}* and my phone number is *${phone.value}* just incase a direct call is required.From what i see, the total price is *${totalAmount.value}*. I would be waiting for further purchase information from you soon, thank you.`;
            const phoneNumber = "653564033"; // Replace with the desired phone number
            const message = encodeURIComponent(userInput); // Encode the message for URL
        
            window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;// Open the WhatsApp app
            totalAmount.value = getTotalAmount(quantity.value,packageSize.value,serviceType.value,getRadioInputs()) + "frs";
}

function getTotalAmount(numOfPackets,packageSize,serviceType,chosenState){
    let final;
    if(packageSize == "Small Package" && chosenState == 1 ){
final = quantity.value * 10000;
if(serviceType == 500){
    final += 500;
}
    }
 if(packageSize == "Small Package" && chosenState == 2 ){
    final = quantity.value * 6000;
    if(serviceType == 500){
        final += 500;
    }
    }
     if(packageSize == "Big Package" && chosenState == 1){
        final = quantity.value * 20000;
        if(serviceType == 500){
            final += 500;
        }
            } 
        
         if(packageSize == "Big Package" && chosenState == 2){
            final = quantity.value * 12000;
            if(serviceType == 500){
                final += 500;
            }
                } 
                return final;
            }
function getDate(){
let date = new Date();
//console.log(date);
 date = `${date}`.split("");
 let answer = '';
 for(let i=0;i<11;i++){
answer += date[i];
 }
 return answer;
}
function getRadioInputs(){
    snailState.forEach((state) => {
        if(state.checked){
    stateVal = state.value;
        }
    });
    return stateVal;
    }