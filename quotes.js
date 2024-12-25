const quotes = [
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "Do not watch the clock. Do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
      author: "James Cameron"
    },
    {
      quote: "Your time is limited, so don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky"
    },
    {
      quote: "Whether you think you can or you think you can't, you're right.",
      author: "Henry Ford"
    }
  ];
  
  const quote = document.querySelector("#quote span:first-child")
  const author = document.querySelector("#quote span:last-child")
  
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;

