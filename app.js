document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("text-span");
  const author = document.getElementById("author-span");
  const newQuote = document.getElementById("new-quote");

  const quotes = [
    { quote: "El miedo no anda en burro", author: "Mamá" },
    { quote: "¿Que no podrá uno?", author: "Mamá" },
    { quote: "Así la vida", author: "Mamá" },
    { quote: "Háganse menos", author: "Mamá" },
    { quote: "Ancina es", author: "Mamá" },
    { quote: "Válgame dios", author: "Mamá" },
    { quote: "En boca cerrada no entran moscas", author: "Mamá" },
    { quote: "Será el sereno", author: "Mamá" },
    { quote: "Vientos huracanados", author: "Mamá" },
    { quote: "No le hace", author: "Papá" },
    { quote: "El dolor del cochi", author: "Papá" },
    { quote: "Levanta pelos", author: "Papá" },
    { quote: "Apaga eso", author: "Papá" },
    { quote: "Te va a pegar un viento", author: "Papá" },
    { quote: "Ya duermete", author: "Papá" },
  ];

  let randomNumber = Math.floor(Math.random() * quotes.length);
  text.textContent = quotes[randomNumber].quote;
  author.textContent = quotes[randomNumber].author;

  newQuote.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * quotes.length);
    text.textContent = quotes[randomNumber].quote;
    author.textContent = quotes[randomNumber].author;
  });
});
