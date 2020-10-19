module.exports = function toReadable (number) {
  (number).toString().split('') //разбиваю число на элементы массива
  // разделить число чтобы определить десятки, сотни, тысячи и т.д.
  let numberValue = number;
  let tens = numberValue%10; //десятки 
  
  numberValue = (numberValue - tens)/10
  let hundreds = numberValue%10; // сотни
  numberValue = (numberValue - hundreds)/10      
  let thousands = numberValue%10; // тысячи
  numberValue = (numberValue - thousands)/10
  const nameOfTens = (tens) => {
      switch (tens) {
        case 1: tens = 'one';
            break
        case 2: tens = 'two';
            break
        case 3: tens = 'three';       
            break
        case 4: tens = 'four';     
            break
        case 5: tens = 'five';     
            break
        case 6: tens = 'six';
            break
        case 7: tens = 'seven';
            break
        case 8: tens = 'eight';
            break
        case 9: tens = 'nine';
            break
        default: tens = '';
            break         
      }
      return tens;
}
  console.log(tens, hundreds, thousands, numberValue);
}
