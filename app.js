document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("text");

  const quotes = ["first quote", "second quote", "third quote"];

  text.textContent = quotes[Math.floor(Math.random() * quotes.length)];
});
