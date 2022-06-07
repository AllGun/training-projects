const addressForm = document.querySelector("#address-form");
const cepInput = document.querySelector("#cep");
const addressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const neighborhoodInput = document.querySelector("#neighborhood");
const regionInput = document.querySelector("#region");
const formInputs = document.querySelectorAll("[data-input]");

const closeButton = document.querySelector("#close-message");

//Validate CEP input
cepInput.addEventListener("keypress", (e) => {
  const onlyNumbers = /[0-9]/;
  const key = String.fromCharCode(e.keyCode);

  // allow only numbers
  if (!onlyNumbers.test(key)) {
    e.preventDefault();
    return;
  }
});

// Get address event
cepInput.addEventListener("keyup", (e) => {
  const inputValue = e.target.value;

  //Chek if we have the correct length
  if (inputValue.length === 8) {
    getAddress(inputValue);
  }
});

// Get customer address from API
const getAddress = async (cep) => {
    console.log(cep);
};
