let counter = 0;
const counterValue = document.getElementById("counter-value");
const incrementv = document.getElementById("increment");
const decrementv = document.getElementById("decrement");
const resetT = document.querySelector("#reset");

incrementv.addEventListener("click", function increment() {
  counter++;
  updateCounter();
});

decrementv.addEventListener("click", function descrement() {
  counter--;
  updateCounter();
});

resetT.addEventListener("click", reset); // To reset the counter to zero
function reset() {
  counter = 0;
  updateCounter();
}

function updateCounter() {
  counterValue.innerHTML = counter;
}
