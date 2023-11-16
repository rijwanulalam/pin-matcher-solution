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