


var quotes=[`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
`“So many books, so little time.”`,
`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
`“If you tell the truth, you don't have to remember anything.”`]

var quoteswriter=[`― Albert Einstein`,`― Frank Zappa`,`― Dr. Seuss`,`― Mark Twain`]

function typingQuotes(){

var randomNumber=Math.floor(Math.random()*4);
var x = quotes[randomNumber];
var y = quoteswriter[randomNumber];
document.getElementById('first-paragraph').innerHTML=x;
document.getElementById('second-paragraph').innerHTML=y;

}

