
quotee = [{
    quote: "“Be yourself; everyone else is already taken.”",
    author: "--Oscar Wilde"
},
{
    quote: "“So many books, so little time.”",
    author: "--Frank Zappa"
},
{
    quote: "“A room without books is like a body without a soul.”",
    author: "--Marcus Tullius Cicero"
},
{
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "--Mae West"
},
{
    quote: "“Be the change that you wish to see in the world.”",
    author: "--Mahatma Gandhi"
},
{
    quote: "“If you tell the truth, you don't have to remember anything.”",
    author: "--Mark Twain"
},
{
    quote: "“A friend is someone who knows all about you and still loves you.”",
    author: "--Elbert Hubbard"
}];

function addquote() {
    index = Number.parseInt(Math.random() * quotee.length);
    document.getElementById("quote_output").innerHTML = `${quotee[index].quote}`;
    document.getElementById("quote_auther").innerHTML = `${quotee[index].author}`;

}