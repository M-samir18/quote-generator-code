var quote1 = {
    text: `
    “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    name: "― Albert Einstein",
  };
  var quote2 = {
    text:`“So many books, so little time.”`,
    name: "― Frank Zappa",
  };
  var quote3 = {
    text: `“A room without books is like a body without a soul.”`,
    name: "― Marcus Tullius Cicero",
  };
  var quote4 = {
    text: `
    “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    name: "― Bernard M. Baruch",
  }
  var quote5 = {
    text: `
    “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    name: "― Bernard M. Baruch",
  }
  var quote6 = {
    text: `
    “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    name: "― Bernard M. Baruch",
  }
  var quote7 = {
    text: `
    “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    name: "― Bernard M. Baruch",
  }

  var quotes = [quote1, quote2, quote3,quote4,quote5,quote6,quote7];

  var quoteTextElement = document.getElementById('qoute_text');
  var auther_name = document.getElementById('auther_name');
  function change_quote() {
    // window.prompt("done");
    
    // console.log(quotes[i].text);
    var i = Math.floor(Math.random()*quotes.length);
    console.log(i);
    var text_quote = quotes[i].text;
    var auther = quotes[i].name;
    quoteTextElement.innerHTML= text_quote;
    auther_name.innerHTML = auther;
    i++;
  }
  
