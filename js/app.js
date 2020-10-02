
function movieDetails(e, url) {
  e.preventDefault();
  window.open(url, "_blank", "width=300px, height=500px");
}

let prev = document.getElementById("previous");
let next = document.getElementById("next");

prev.addEventListener("click", getPreviousPage);
function getPreviousPage() {
  history.back()
}

next.addEventListener("click", getNextPage);
function getNextPage() {
  history.forward()
}

function watchNow(e, selector) {
  e.preventDefault();
  window.location.href = selector;
}

// Form Validation
let button = document.getElementById("button");
let creditCardPin = document.getElementById("creditCard");
let form = document.getElementById("form");
button.addEventListener("click", submitForm);

function submitForm(e) {
  e.preventDefault();
  let pinValue = creditCardPin.value;


  console.log(pinValue)
  const visaCard = RegExp(/^4[0-9]{12}(?:[0-9]{3})?$/);
  const masterCard = RegExp(/^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/);

  if (visaCard.test(pinValue) || masterCard.test(pinValue)) {

    alert("Login Successful.");
    form.reset();
    return newPinValue.join();
  } else {
    alert("Please provide a valid Visa or Mastercard")
  }

}


