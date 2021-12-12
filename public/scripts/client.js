/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

// Takes in an array of tweet objects and appends each one to the #tweest-container
const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet);
  }
};

// Takes in a tweet object and returns a tweet <article> element containing the HTML structure of the tweet
const createTweetElement = function (tweet) {
  return `<article class="tweet">
  <header>
    <section>
      <img src="${tweet.user.avatars}"> 
      <span>Newton</span>
    </section>
    <div>
      ${tweet.user.handle}
    </div>
  </header>
  <br>
  <p>${tweet.content.text}</p>
  <footer>
    ${tweet.created_at}
    <div class="icons">
      <button type="button"><i class="fa-solid fa-flag"></i></button>
      <button type="button"><i class="fa-solid fa-retweet"></i></button>
      <button type="button"><i class="fa-solid fa-heart"></i></button>
    </div>
  </footer>
</article>`;
};

$(document).ready(function() {
  renderTweets(data);

// Listens for the POST event and prevents the default behavior
  $("#new-tweet-form").submit(function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    $.post("/tweets", data);
  })
})