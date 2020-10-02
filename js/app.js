
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

let visaCard = /^ 4[0 - 9]{ 12}(?: [0 - 9]{ 3})?$/

masterCard = /^ 5[1 - 5][0 - 9]{ 14 } $/