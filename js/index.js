function getRandomWiki() {
  window.open("https://en.wikipedia.org/wiki/Special:Random");
}

var finalResultsArray = [];
function getWikiResults() {
  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $('#search').val(),
    dataType: 'jsonp',
    type: 'POST',
    headers: {
      'Api-User-Agent': 'Example/1.0'
    },
    success: function(data) {
      console.log(data);
      var resultsArray=data.query.search;
      console.log(resultsArray);
      
      for (var result in resultsArray){
  /*finalResultsArray.push([resultsArray[result].title, resultsArray[result].snippet]);*/   
        var html = '<div class="resultbox text-center well"><a href="https://en.wikipedia.org/wiki/' + resultsArray[result].title + '">'+resultsArray[result].title+'</a><p class="small">'+resultsArray[result].snippet+'</p></div>';
        console.log(html);
        $(".results").append(html);
      }
    }
} );
}