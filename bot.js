var twit  = require('twit');
var config = require('./config.js');

//Pass the configuration (consumer and access tokens) of our Twitter application in config.js to twit
var Twitter  = new twit(config);

vat retweet = function(){
  var params = {
    q: '#nodejs, #Nodejs',
    reqult_type: 'recent',
    lang: 'en'
  }

  Twitter.get('search/tweets', params, function(err, data){
    //if there no error
    if(!err){
      //grab ID of tweet to retweet
      var retweetID = data.statuses[0].id_str;
      //tell twitter to retweet
      Twitter.post('statuses/retweet/:id',{
        id: retweetId
      }, function(err, response){
        if(response){
          console.log('retweeted!!');
        }
        //if there was an error while tweeting
        if(err){
          console.log('Something went wrong while retweeting ... duplication');
        }
      });
    }
    //if unable to search a tweet
    else{console.log('Something went wrong while searching');}
  });
}

//grab and retweet
retweet();
//retweet in every 50 mins
setInterval(retweet, 3000000)



//favorite bot

//find a randonm tweet and favorite it
var favoriteTweet = function(){
  var params = {
    q: '#nodejs, #Noodejs',
    result_type: 'recent',
    lang: 'en'
  }

  //find the tweet
  Twitter.get('search/tweets', params, function(err, data){
    //find tweets
    var tweet = data.statuses;
    var randomTweet = ranDom(tweet); //pick a random tweet

    //if random exists
    if(typeof randomTweet != 'undefined'){
      //tell twiiter to favorite
      Twitter.post('favorites/create', {id: randomTweet.id_str}, function(err, response){
        //if there was an error while 'favorite'
        if(err){
          console.log('cannot be favorite ...error');
        }
        else{
          console.log('favorited ... success!!!');
        }
      });
    }
  });
}

//grab & favorite
favoriteTweet();

//favorite a tweet in every 60 mins
setInterval(favoriteTweet, 3000000);

//function to generate a random tweet tweet
function ranDom(arr){
  var index = Math.floor(Math.random()*arr.length);
  return arr[index];
}
