const button = document.getElementById('quote-button');
const quoteBanner = document.getElementById('quote-banner');
const authorBanner = document.getElementById('author-banner');
const tweet = document.getElementById('twitter-button');

let quote;
let author;

function init() {

button.addEventListener('click', getQuote);
tweet.addEventListener('click', tweetQuote);
}

const getQuote = () => {
  const url = 'https://quotes.stormconsultancy.co.uk/random.json';
  let currentQuote, currentAuthor;
  fetch(url).then(function(response) {
    return response.json();
  }).then(function(quotes) {
    clear();
    currentQuote = quotes.quote;
    currentAuthor = quotes.author;
    quoteBanner.insertAdjacentHTML('afterbegin', `<div id="quote">${currentQuote}<div id="block"></div></div>`);
    authorBanner.insertAdjacentHTML('afterbegin', `<div id="quote">${currentAuthor}</div>`);
    quote = currentQuote;
    author = currentAuthor;
  });
}

const tweetQuote = () => {
  if (quote.length > 140) {
    alert('This quote is too long to tweet out. Please select a shorter quote.');
  } else {
    window.open(`https://twitter.com/intent/tweet?text=${quote}-${author}`)
  }
}

const clear = () => {
  quoteBanner.innerHTML = "";
  authorBanner.innerHTML = "";
}


document.addEventListener("DOMContentLoaded", init);

