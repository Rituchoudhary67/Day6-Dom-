const quotes = [
    {
        quote: `I'm not a great programmer; I'm just a good programmer with great habits.`,
        author :`-kent Beck`
    },
    {
        quote: `The greatest glory in living lies not in never falling, but in rising every time we fall.`,
        author : `-Nelson Mandela`
    },
    {
        quote:`The way to get started is to quit talking and begin doing.`,
        author:`-Walt Disney`
    },
    {
        quote:`If life were predictable it would cease to be life, and be without flavor.`,
        author:` -Eleanor Roosevelt`
    },
]
 
const quoteBtn = document.getElementById('quote-btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})