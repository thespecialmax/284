$(document).ready(function(){
      // Function to customize look TwitterFeed
  function customizeTwitterFeed() {
      // Timeout needed to make sure that feed is loaded
      setTimeout( function() {
          // Find twitterfeeds
          if ( $('[id*=twitter]').length ) {
            
          $('[id*=twitter]').each( function(){
              // Find body of twitterFeed;
              var ibody = $(this).contents().find( 'body' );
  
              // CSS

              // Header
              ibody.find(".timeline-Header").css('background-color','#f15a22');
              ibody.find(".timeline-Header-title").css('color','#FFF');
              ibody.find(".timeline-Header-byline").css('color','#FFF');
              ibody.find(".customisable-highlight").css('color','#000');
              ibody.find(".Icon--informationCircleWhite").css('color','#FFF');

              // Text in tweet
              ibody.find(".TweetAuthor-name").css("color","#f15a22");
              ibody.find(".hashtag").css("color","#f15a22");
              ibody.find(".timeline-Tweet-text").css("color","#706B72");
              ibody.find(".link").css("color","#000");
              ibody.find(".PrettyLink.profile").css("color","#000");

              // Icons
              ibody.find(".Icon--twitter").css('background-image','url("/images/icons/twitter.svg")');
              ibody.find(".Icon--heart").css('background-image','url("/images/icons/like.svg")');
              ibody.find(".Icon--share").css('background-image','url("/images/icons/share.svg")');
              ibody.find(".Icon--informationCircleWhite").css('background-image','url(/images/icons/info.svg)');

              // Tweet:hover
              ibody.find(".timeline-Tweet").hover(function(){
                $(this).css("background-color", "#E4E3DF");
                 $(this).find(".Icon--twitter").css('background-image','url("/images/icons/twitter-hover.svg")');
                 $(this).find(".Icon--heart").css('background-image','url("/images/icons/like-hover.svg")');
                 $(this).find(".Icon--share").css('background-image','url("/images/icons/share-hover.svg")');
              }, function(){
                $(this).css("background-color", "#FFF");
                 $(this).find(".Icon--twitter").css('background-image','url("/images/icons/twitter.svg")');
                 $(this).find(".Icon--heart").css('background-image','url("/images/icons/like.svg")');
                 $(this).find(".Icon--share").attr('style','background-image: url("/images/icons/share.svg") !important;');
              });

              // Share menu options
              ibody.find(".timeline-ShareMenu-option").hover(function(){
                $(this).css("background-color", "#f15a22");
              }, function(){
                $(this).css("background-color", "#FFF");
              });


              // TweetActions:hover
              ibody.find(".TweetAction--heart").hover(function(){
                $(this).find(".Icon--heart").attr('style','background-image: url("/images/icons/like-icon-hover.svg") !important;');
              }, function(){
                 $(this).find(".Icon--heart").attr('style','background-image: url("/images/icons/like-hover.svg") !important;');
              });

              ibody.find(".TweetAction--share").hover(function(){
                $(this).find(".Icon--share").attr('style','background-image: url("/images/icons/share-icon-hover.svg") !important;');
              }, function(){
                 $(this).find(".Icon--share").attr('style','background-image: url("/images/icons/share-hover.svg") !important;');
              });


              // "Load more" button
              ibody.find(".timeline-loadMore-prompt").css('border-top','1px solid #f15a22');

              ibody.find(".timeline-ShowMoreButton").css({
                  'background-color': '#FFF',
                  'color': '#f15a22',
                  'border':'1px solid #f15a22'
                });

              ibody.find(".timeline-ShowMoreButton").hover(function(){
                $(this).css({
                  'background-color': '#f15a22',
                  'color': '#FFF'
                });
              }, function(){
                $(this).css({
                  'background-color': '#FFF',
                  'color': '#f15a22'
                });
              });

              // Customize newly loaded tweets
              ibody.find(".timeline-ShowMoreButton").on('click',function(){
                customizeTwitterFeed();
              });
  
          });
        }
      }, 3000);
  }

  customizeTwitterFeed();
});