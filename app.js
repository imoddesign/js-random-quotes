const button = document.getElementById("generate-btn");
const name = document.getElementById("name");
const title = document.getElementById("title");

const quotes = [
  {
    title:
      "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
    name: " Life"
  },
  {
    title:
      "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
    name: "John Kenneth Galbraith"
  },
  {
    title: "God save me from my friends. I can protect myself from my enemies.",
    name: "Claude Louis Hector de Villars "
  },
  {
    title: "The price of anything is the amount of life you exchange for it.",
    name: "David Thoreau"
  },
  {
    title:
      "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
    name: "Charles Lindbergh"
  },
  {
    title:
      "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
    name: " Tyne Daly"
  }
];

console.log(quotes.length);

function generateQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  name.textContent = quotes[index].name;
  title.textContent = quotes[index].title;
}

button.addEventListener("click", generateQuote);
