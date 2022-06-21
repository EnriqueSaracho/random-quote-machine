document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("text");
  const author = document.getElementById("author");

  const quotes = [
    { quote: "first quote", author: "first author" },
    { quote: "second quote", author: "first author" },
    { quote: "third quote", author: "second author" },
  ];

  randomNumber = Math.floor(Math.random() * quotes.length);
  text.textContent = quotes[randomNumber].quote;
  author.textContent = quotes[randomNumber].author;
});
