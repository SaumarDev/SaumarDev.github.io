const validator = {
  //validator = Objeto        isValid = metodo
  isValid: function (creditCardNumber) {
      let myArray = [];
      let array2 = [];
      let array3 = [];
      let pairNumbers = [];
      let oddNumber = [];

      //se obtiene el valor de la tarjeta y se agrega en un array en orden inverso
      myArray = Array.from(creditCardNumber).reverse();

      //se toman solo las posiciones pares para multiplicarlas por 2
      for (let i = 1; i < myArray.length; i = i + 2) {
        //i=i+1 -> i++
        let pair = parseInt(myArray[i] * 2);
        //console.log(myArray);
        if (pair > 9) {
          let sum = pair.toString().split("");
          array2.push(parseInt(sum[0]) + parseInt(sum[1]));
          //console.log(array2)
        } else {
          array3.push(parseInt(myArray[i]) * 2);
          //console.log(array3)
        }
        pairNumbers = array2.concat(array3);
        //console.log(pairNumbers)
      }
      //ciclo para acceder a los numeros impares :D
      for (let i = 0; i < myArray.length; i = i + 2) {
        oddNumber.push(parseInt(myArray[i]));
        //console.log(oddNumber)
      }

      const finalArray = pairNumbers.concat(oddNumber);
      //console.log(finalArray)

      let totalSumArray = finalArray.reduce(function (a, b) {
        return a + b;
      });

      if (totalSumArray % 10 == 0) {
        return true;
      } else {
        return false;
      }
  },

  
  maskify: function (creditCardNumber) {
    //console.log("El valor es" + creditCardNumber);
    let numberSign = creditCardNumber.slice(0,-4).replace(/./g, '#')
    let last4Digits = creditCardNumber.slice(-4, creditCardNumber.length)
    let arrayMaskify = numberSign.concat(last4Digits)
    return arrayMaskify
  },



};

export default validator;
