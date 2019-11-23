var topic = "cold war";
var records = "2";
var firstDate = "20120101";
var endDate = "20190101";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic + "&api-key=7JA7U8zzOYLzTbAuMNrXjUMAws3vsAml&limit=" + records 
+ "&begin_date=" + firstDate + "&end_date=" + endDate;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(results) {
console.log(results.response);

var fullArray = results.response.docs;
for (i=0; i<fullArray.length; i++){
    console.log(results.response.docs[i].headline.main);
    console.log(results.response.docs[i].byline.original);
    console.log(results.response.docs[i].abstract);
    console.log(results.response.docs[i].pub_date);
    console.log(results.response.docs[i].section_name);
    console.log(results.response.docs[i].web_url);
    console.log("------------------------------------");
}
//     console.log(results.response.docs[i].headline.main);

// console.log(results.response);
// // console.log(results);
// console.log(results.response.docs["0"].headline.main);
// console.log(results.response.docs["0"].byline.original);
// console.log(results.response.docs["0"].abstract);
  });