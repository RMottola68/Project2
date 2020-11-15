$(document).ready(function () {
    console.log( "ready!" );
    $('#search-button').on('click', () => {
        console.log('clicked');
      
        let searchTerm = $('#search-field').val();
        let url = "https://api.giphy.com/v1/gifs/search?api_key=FoVxkgXu1a1oBtFmJhHjo3YC7PtgtcPb&q=" + searchTerm;
// jquery way of doin it
      $.get(url, function(giphyResponse) {
        //console.log(giphyResponse);
        //console.log('giphyData', giphyResponse.data)
        //console.log('giphyData result 0 (1st result)', giphyResponse.data[0]);
        //console.log('giphyData result 0 (1st result) - all images list', giphyResponse.data[0].images);
        //console.log('giphyData result 0 (1st result) - all images list - original image', giphyResponse.data[0].images.original);
        //console.log('giphyData result 0 (1st result) - all images list - original image - url', giphyResponse.data[0].images.original.url);
 
        let resultsHtml = '';
        for(let image of giphyResponse.data){
            let resultsHtml = '<img src=${image.images.original.url} />'
            resultsHtml = resultsHtml + `<img src=${image.images.original.url} />`
        }

        $('#search-results').html(resultsHtml);
        
      });
    });
});