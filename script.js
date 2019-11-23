
var searchTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;
var articleCounter = 0;

var authKey = "VbNx3kR8Piy2PLlUKaIVy2jVbXZsXrdS";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(data) {
      console.log(data);
      console.log(data.response.docs[0].headline.main);
  })

