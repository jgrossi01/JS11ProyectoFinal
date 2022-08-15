import { formValidate, loadStorageForm, updateCart, updateStorage } from "./form.js";
import { createSelect, loadCards } from "./content.js";
import { arrayReservations } from "./class.js";

const arrayCarsFetch = [];
const quantityInput = document.getElementById("quantityInput");
const clearFormBtn = document.getElementById("clearFormBtn");
const bookingForm = document.getElementById("bookingForm");
const finalMsj = document.getElementById("finalMsj");
const additionalMsj = document.getElementById("additionalMsj");

window.addEventListener("DOMContentLoaded", (event) => {
  //Carga tarjetas desde JSON y crea lista para formulario
  fetch("./cars.json")
    .then((response) => response.json())
    .then((data) => {
      arrayCarsFetch.push(data);
      loadCards(data);
      createSelect(data);
    });

  loadStorageForm();
  updateCart();
});

// Cuando se deja de escribir se guarda el nuevo valor en el storage
quantityInput.addEventListener("keyup", () => {
  localStorage.setItem("quantityInput", JSON.stringify(quantityInput.value));
});

// El boton limpiar quita los valores del campo y del storage
clearFormBtn.addEventListener("click", () => {
  localStorage.clear();
  bookingForm.reset();
  arrayReservations.length = 0;
  updateStorage();
  updateCart();
  additionalMsj.innerHTML = "";
  finalMsj.innerHTML = "";
});

// Ejecutamos la validacion del forumlario al ser enviado
bookingForm.addEventListener("submit", formValidate);

function nextIndexOf(array) {
  return array.length + 1;
}

export { nextIndexOf, arrayCarsFetch };
