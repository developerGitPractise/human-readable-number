module.exports = function toReadable (number) {
    // разделить число чтобы определить десятки, сотни, тысячи и т.д.
    let numberValue = number;
    let numeral = numberValue % 10; //0-9            //4
    numberValue = (numberValue - numeral) / 10       
    let tens = numberValue % 10; // 10-19            //3
    numberValue = (numberValue - tens) / 10          
    let hundred = numberValue % 10; // сотни        //2
    numberValue = (numberValue - hundred) / 10       
    
    let numeralArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teensArray = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tensArray = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
           

    // сотни
    let hundredText; 
    if (hundred !== 0) {  // если сотни есть
        hundredText = `${numeralArray[hundred]} hundred`;
    } else {
        hundredText = '';
    }       
    
    // десятки
    let tensText;
    if (tens === 1) { // 10-19 
        tensText = teensArray[numeral];
    } else if (tens !== 0 && tens !== 1) { //20-99
        tensText = tensArray[tens];
    } else if (tens === 0){
        tensText = '';
    }

    // единицы 
    let numeralText;
    if ((tens === 1) || ((hundred !== 0 || tens !== 0) &&  numeral === 0)) {
        numeralText = '';
    } else if (((hundred !== 0 || (tens !== 0 && tens !== 1)) && numeral !== 0) || ((hundred == 0 || tens == 0) && (numeral === 0 || numeral !== 0))) {
        numeralText = numeralArray[numeral];
    } 

    let resultArray = [hundredText, tensText, numeralText];
    return resultArray.filter(element => element !== '').join(' ');
}
