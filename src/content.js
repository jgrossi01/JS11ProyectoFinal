function createSelect(data) {
  const selection = document.getElementById("modelInput");
  selection.innerHTML = "";
  Array.from(data).forEach((car) => {
    const { name, id } = car;
    selection.innerHTML += `<option id="op-${id}">${name}</option>`;
  });
}

function updateSelect(selectedId) {
  const optionsContainer = document.getElementById("modelInput");

  Array.from(optionsContainer).forEach((element) => {
    const optionId = element.id.split("-")[1];
    const wantedId = parseInt(selectedId);
    element.removeAttribute("selected");

    if (optionId == wantedId) {
      element.setAttribute("selected", true);
    }
  });
}

function removeContent() {
  let content = document.getElementById("cards");
  content.innerHTML = "";
}

function loadCards(data) {
  removeContent();
  let destination = document.getElementById("cards");
  data.forEach((post) => {
    // Clase 12. operadores avanzados, simplificacion de codigo
    // en vez de car.id luego usaremos id.
    const { id, img, name, passengers, fuel, transmission } = post;
    const card = document.createElement("section");
    card.classList.add("text-gray-600");
    card.classList.add("body-font");

    card.innerHTML = 
    `
    <div class="container max-w-7xl my-10 mx-auto px-4 sm:px-6 lg:px-8 card" id="${id}">
        
        <div class="p-5 flex items-center mx-auto bg-white border-b border-gray-200 rounded-lg sm:flex-row flex-col min-width-360">
            <!-- Imagen principal tarjeta -->
            <div class="w-80 h-auto pr-10 pr-0 sm:pr-10 sm:w-60 inline-flex items-center justify-center flex-shrink-0">
                <img src="/public/img/${img}"/>
            </div>
            
            <!-- Caracteristicas del vehiculo -->
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 class="text-black text-2xl title-font font-bold mb-2">${name}</h1>
                <div class="inline-flex space-x-2">
                    <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/undefined/external-speedometer-cars-components-those-icons-lineal-color-those-icons.png" class="inline-flex "/>
                    <p> Kilometraje ilimitado</p>
                </div>
                <div class="py-4 characteristics">
                    <div class=" inline-block mr-2">
                        <div class="flex pr-2 h-full items-center space-x-2">
                            <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/undefined/external-safety-seat-cars-components-those-icons-lineal-color-those-icons.png"/>
                            <p class="title-font font-medium">${passengers}</p>
                        </div>
                    </div>
                    <div class="inline-block mr-2">
                        <div class="flex  pr-2 h-full items-center space-x-2">
                            <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/undefined/external-fuel-cars-components-those-icons-lineal-color-those-icons.png"/>
                            <p class="title-font font-medium">${fuel}</p>
                        </div>
                    </div>
                    <div class="inline-block mr-2">
                        <div class="flex  pr-2 h-full items-center space-x-2">
                            <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/undefined/external-gearshift-cars-components-those-icons-lineal-color-those-icons-3.png"/>
                            <p class="title-font font-medium">${transmission}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sm:text-right text-center ml-0 mt-6 sm:mt-0 space-x-2 w-15 max-w-sm">
                <button type="button" class="rentItBtn w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-cyan-500 text-base font-medium text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-200 sm:ml-3 sm:w-auto sm:text-sm">Alquilar</button>
                <a class="mt-3 text-indigo-500 inline-flex items-center">Mas info
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
            </div>

        </div>
    </div>
    `;
    destination.appendChild(card);

    const rentItBtn = document.getElementsByClassName("rentItBtn");

    Array.from(rentItBtn).forEach(function (element) {
      element.addEventListener("click", () => {
        const selectedId = element.parentElement.parentElement.parentElement.id;
        updateSelect(selectedId);
        bookingForm.scrollIntoView(true);
      });
    });
  });

  //Agregamos la caracteristica ABS si corresponde
  let cards = document.getElementsByClassName("card");
  for (let card of cards) {
    for (let car of data) {
      if (card.id == car.id && car.abs == true) {
        const characteristics = card.querySelector(".characteristics");
        characteristics.innerHTML += `
        <div class="inline-block mr-2">
            <div class="flex pr-2 h-full items-center space-x-2">
                <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/undefined/external-abs-cars-components-those-icons-lineal-color-those-icons.png"/>
                <p class="title-font font-medium">ABS</p>
            </div>
        </div>
        `;
      }
    }
  }
}

export { createSelect, updateSelect, removeContent, loadCards };
