var twit  = require('twit');
var config = require('./config.js');

//Pass the configuration (consumer and access tokens) of our Twitter application in config.js to twit
var Twitter  = new twit(config);

vat retweet = function(){
  var params = {
    q: '#nodejs', '#Nodejs',
    reqult_type: 'recent',
    lang: 'en'
  }

  Twitter.get('search/tweets', params, function(err, data{
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
  }));
}

//grab and retweet
retweet();
//retweet in every 50 mins
setInterval(retweet, 3000000)
