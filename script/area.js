function getInputFieldValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueText = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueText);
    return inputFieldValue;
}

function setAreaValue(elementId, newValue){
    const inputField = document.getElementById(elementId);
    inputField.value = newValue;
    
}


function calculateTriangleArea(){
    const base = getInputFieldValue('triangle-base');
    const height = getInputFieldValue('triangle-height');
    const area = (0.5 * base * height).toFixed(2);
    setAreaValue('triangle-area', area);
    

}

function calculateRectangleArea(){
    const width = getInputFieldValue('rectangle-width');
    const length = getInputFieldValue('rectangle-length');
    const area = width * length;
    setAreaValue('rectangle-area', area);
    console.log(area);
}