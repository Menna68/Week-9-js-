var Quotes = [
    {
        'quote': `“Be yourself; everyone else is already taken.”`,
        'author': '-- Oscar Wilde'
    },
    {
        'quote': `“In three words I can sum up everything I've learned about life: it goes on.” `,
        'author': '--Robert Frost'
    },
    {
        'quote': `“You only live once, but if you do it right, once is enough.”`,
        'author': '-- Mae West'
    },
    {
        'quote': `“If you tell the truth, you don't have to remember anything.”`,
        'author': '--  Mark Twain'
    },
    {
        'quote': `“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”`,
        'author': '-- Ralph Waldo Emerson'
    },
    {
        'quote': `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
        'author': '-- Mahatma Gandhi'
    },
];

var lastRandom = null ;

function Quote() {

    var random;

    do {
        random = Math.floor(Math.random() * Quotes.length);
    } while (random === lastRandom);

    lastRandom = random;

    document.getElementById("Text").innerHTML = `<h2 class="mt-4">${Quotes[random].quote}</h2>`;
    document.getElementById("Text").innerHTML += `<h2>${Quotes[random].author}</h2>`;
}