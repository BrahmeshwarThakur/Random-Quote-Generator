
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};



window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
// let quote = document.getElementById("quote");
// let author = document.getElementById("author");
// let btn = document.getElementById("btn");

// const url = "https://api.api-ninjas.com/v1/quotes";

// // Function to handle successful response and update the UI
// const updateQuote = (item) => {
//   quote.innerText = item.content;
//   author.innerText = item.author;
// };

// // Function to handle errors and log them to the console
// const handleErrors = (error) => {
//   console.error('Error fetching the quote:', error);
// };

// let getQuote = () => {
//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then((data) => updateQuote(data))
//     .catch((error) => handleErrors(error));
// };

// window.addEventListener("load", getQuote);
// btn.addEventListener
