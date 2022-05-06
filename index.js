let button = document.getElementById("button");
let span = document.querySelector("span");
let big = document.querySelector(".container");
let box = document.querySelector(".box");

button.addEventListener("click", (e) => {
  let color = Math.random();
  color = color.toString(16);
  let final = color.slice(2, 8);
  big.style.backgroundColor = `#${final}`;

  span.textContent = `#${final}`;
});
