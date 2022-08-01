import validator from "./validator.js";

let creditCardNumber = document.getElementById("numberCard");

creditCardNumber.addEventListener("change", function () {
  if(creditCardNumber.value.length==16){
    if (validator.isValid(creditCardNumber.value)) {
      document.getElementById("isValidate").innerText = "La tarjeta es válida";
      document.getElementById("isValidate").style.color = "green";
    } else {
      document.getElementById("isValidate").innerText = "La tarjeta es inválida";
      document.getElementById("isValidate").style.color = "red";
    }  
  }else{
    alert("ingresa 16 números")
  }
  
  //Llamamos a maskify
  let maskifiedValue = validator.maskify(creditCardNumber.value);
  document.getElementById("numberCard").value = maskifiedValue;
});
