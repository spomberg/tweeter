/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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
  // Listens for the POST event and prevents the default behavior
  $("#new-tweet-form").submit(function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    $.post("/tweets", data);
  })

  // Gets the tweets data from /tweets and calls the renderTweets function to render the tweets
  const loadTweets = function() {
    $.get("/tweets", function(data) {
      renderTweets(data);
    })
  }

  loadTweets();
});