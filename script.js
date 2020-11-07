


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchterm + "&api-key=C6PBFTXpLY3IK9rkzEWd6BLseVBYsNu1"


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
  console.log(response);
var searchTerm = $("#search-term");  
});

