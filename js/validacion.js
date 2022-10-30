document.addEventListener("DOMContentLoaded", function(e){
    let password2 = document.getElementById("password2").addEventListener("keyup", ()=>{
        let password1 =  document.getElementById("password1");
        let email= document.getElementById("email")
        if(password1.checkValidity()) {
            validarContraseña();
        }
        if(email.checkValidity()){
          validarcorreo()
        }
    });
    let checkbox = document.getElementById("terminos");
    checkbox.addEventListener("click", ()=>{
        validarTerminos();
    });
 
});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            validarTerminos()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  function validarContraseña(){

    let password1 =  document.getElementById("password1");
    let password2 =  document.getElementById("password2");

    if(password1.value != password2.value){
        password2.setCustomValidity('Debe ser igual a "contraseña"');
    } else {
        password2.setCustomValidity("");
    }
  }

  function validarTerminos(){
    
    let checkbox = document.getElementById("terminos"); 
    let terminosYCon = document.getElementById("terminosButton");

    if(!checkbox.checked) {
        terminosYCon.setCustomValidity("Debe aceptar los terminos del servicio");
        checkbox.setCustomValidity("Debe aceptar los terminos del servicio");
        document.getElementById("terminos-validacion").innerHTML="Debe aceptar los terminos del servicio";
        document.getElementById("terminosButton").classList.add("text-danger");
    } else {
        checkbox.setCustomValidity("");
        terminosYCon.setCustomValidity("");
        document.getElementById("terminos-validacion").innerHTML="";
        document.getElementById("terminosButton").classList="btn btn-link ps-0"
    }

  }
 function validarcorreo(){
  let expresion = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  let email = document.getElementById('email')
  if (expresion.test(email.value)){
    email.setCustomValidity("");
}else{
    email.setCustomValidity(false);
    res=false;
}
 }