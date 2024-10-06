function nameElements(elementName) {
    console.log(elementName);
}

function turnOff(element) {
    element.innerText = "Off";
    if (element.innerText === "Off"){
        element.style.backgroundColor = "red";
        
    }
    else {
        
        element.innerText="On";
    }
}
function hide(element){
    element.remove() ;
}
