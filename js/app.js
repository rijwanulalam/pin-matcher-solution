function getPin(){
    const pin = getRandom() + "";
    if(pin.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function getRandom(){
    const randomValue = Math.round(Math.random()*10000);
    return randomValue;
}

document.getElementById("pin-generator").addEventListener("click", function(){
    const randomPin = getPin();
    const setPin = document.getElementById("show-random-pin");
    setPin.value = randomPin;
})

document.getElementById("numbers").addEventListener("click", function(event){
    const displayNumbers = document.getElementById("display-numbers");
    const previousNumber = displayNumbers.value;
    const numberString = event.target.innerText;

    if(isNaN(numberString)){
        if(numberString === "C"){
            displayNumbers.value = "";
        }
        else if(numberString === "<"){
            const digits = previousNumber.split("");
            digits.pop();
            const remainingDigits = digits.join("");
            displayNumbers.value = remainingDigits;
        }
    }
    else{
        displayNumbers.value = previousNumber + numberString;
    }
})

document.getElementById("verify-btn").addEventListener("click", function(){
    const randomNumbers = document.getElementById("show-random-pin").value;

    const typedNumber = document.getElementById("display-numbers").value;

    const successMsg = document.getElementById("success");
    const wrongMsg = document.getElementById("wrong");

    if(typedNumber === ""){
        alert("please generate pin and match it");
    }
    else{
        if(randomNumbers === typedNumber){
            successMsg.style.display = "block";
            wrongMsg.style.display = "none";
        }
        else if(randomNumbers !== typedNumber){
            wrongMsg.style.display = "block";
            successMsg.style.display = "none";
        }
    }
})