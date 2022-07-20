module.exports = function reverse (number) {
    number = Math.abs(number);
    const str_Number = String(number);
    const arr_Number = [];
    const length_Number = str_Number.length;

    
/* Переводим заданное число в массив */
    for (let i=0; i < length_Number; i++) {
        arr_Number[i] = str_Number[i];
      }
      
/* Меняем элементы */
    let arr_Number_help = [];
    for ( let i=0; i < length_Number; i++){
        arr_Number_help[i] = arr_Number[length_Number-1-i];
        
    }

 /* Убираем нули впереди */   

    for ( let i=0; i < ( length_Number - 1 ); i++){
        if ( arr_Number_help[0] == 0 ){
            arr_Number_help.shift();
        }
     }
    
/* Выводим массив в строку */
    let rezult = ""
    for (let unit of arr_Number_help) {
        rezult = rezult + unit;
    }
    console.log (rezult);
    return (rezult);
}
