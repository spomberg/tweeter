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

// Escape function to use with createTweetElement()
const escapeText = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// Takes in a tweet object and returns a tweet <article> element containing the HTML structure of the tweet
const createTweetElement = function(tweet) {
  return `<article class="tweet">
  <header>
    <section>
      <img src="${tweet.user.avatars}"> 
      <span>${tweet.user.name}</span>
    </section>
    <div>
      ${tweet.user.handle}
    </div>
  </header>
  <p>${escapeText(tweet.content.text)}</p>
  <footer>
    ${timeago.format(tweet.created_at)}
    <div class="icons">
      <button type="button"><i class="fa-solid fa-flag"></i></button>
      <button type="button"><i class="fa-solid fa-retweet"></i></button>
      <button type="button"><i class="fa-solid fa-heart"></i></button>
    </div>
  </footer>
</article>`;
};

$(document).ready(function() {
  // Listens for the POST event and prevents the default behavior, validates the tweet then posts it using JQuery
  $("#new-tweet-form").submit(function(event) {
    event.preventDefault();
    const serializedData = $(this).serialize();
    const tweet = serializedData.slice(5).replaceAll('%20', ' ');
    
    // Hides error message if not already hidden
    $(".error").empty();
    $(".error").slideUp("fast");

    // Form validation, checks if the text is not empty or is over 140 characters long and displays an error if so
    if (!tweet || tweet.length === 0 || tweet.length > 140) {
      const errors = [" ❗ Error: You can't submit an empty tweet", " ❗ Error: Your tweet is over 140 characters long!"];
      let errStr;
      !tweet || tweet.length === 0 ? errStr = 0 : errStr = 1;
      $(".error").append(`<p> ${errors[errStr]} </p>`);
      $(".error").slideDown();
    } else {

      // Posts tweet if the form passes validation, clears text area and resets the character counter
      $.post("/tweets", serializedData, function() {
        $("#tweet-text").val("");
        $(".counter").val(140);

        // Gets the tweets data and appends the latest tweet to the HTML code
        $.get("/tweets", function(data) {
          const newTweet = createTweetElement(data[data.length - 1]);
          $("#tweets-container").append(newTweet);
        });
      });
    }
  });

  // Gets the tweets data from /tweets and calls the renderTweets function to render the tweets
  const loadTweets = function() {
    $.get("/tweets", function(data) {
      renderTweets(data);
    });
  };

  loadTweets();
});