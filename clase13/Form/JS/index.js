window.addEventListener("load", () => {
  const form = document.getElementById("formulario");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");
  const avisoSuccess = document.getElementById("onSuccess");

  //Funcion submit
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // evita la recarga del formulario post submit

    // capturamos la informacion del form con esta funcion
    validate();
  });

  //Funcion validadora
  //Expresiones regulares: usamos trim() para eliminar espacios [metodo nativo]
  const validate = () => {
    const valueName = nombre.value.trim();
    const valueEmail = email.value.trim();
    const arrayValuesEmail = valueEmail.split(".");
    const valueMensaje = mensaje.value.trim();

    if (valueName.length < 3) {
      console.log(valueName.length);
      console.log("Nombre invalido");
      onError(nombre, "Nombre es muy corto");
      return;
    }
    if (valueName.length > 20) {
      console.log(valueName.length);
      console.log("Nombre invalido");
      onError(nombre, "Nombre es muy largo");
      return;
    }

    if (arrayValuesEmail.length !== 2 || arrayValuesEmail[1] !== "com") {
      console.log(arrayValuesEmail.length);
      console.log("Email invalido");
      onError(email, "El email no es valido");
      return;
    }

    if (valueMensaje.length < 20) {
      console.log(valueMensaje.length);
      console.log("Mensaje invalido");
      onError(mensaje, "Mensaje es muy corto");
      return;
    }
    if (valueMensaje.length > 30) {
      console.log(valueMensaje.length);
      console.log("Mensaje invalido");
      onError(mensaje, "Mensaje es muy largo");
      return;
    }

    // Llego aca, ejecuto la funcion success

    onSuccess();

    // promesa (con fetch)
  };

  const onError = (input, msg) => {
    console.log("Ejecuto Error");
    const divInput = input.parentElement; // obtengo el padre directo de este input
    const aviso = divInput.querySelector("p");
    aviso.innerText = msg;
    aviso.className = "alert alert-danger mt-3"; // clase de bootstrap
  };

  const onSuccess = () => {
    console.log("Ejecuto Success");

    avisoSuccess.innerText = "Formulario Enviado";
    avisoSuccess.className = "alert alert-success mt-3";
  };
});


// tener en cuenta el Undefined y el null