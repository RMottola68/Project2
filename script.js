$(document).ready(function () {
    console.log( "ready!" );
    $('#search-button').on('click', () => {
        let searchTerm = $('#search-field').val();
        let url = "https://api.giphy.com/v1/gifs/search?api_key=FoVxkgXu1a1oBtFmJhHjo3YC7PtgtcPb&q=" + searchTerm;
        $.get(url, function(giphyResponse) {
         
        let resultsHtml = '';
        for(let image of giphyResponse.data){
            let imgHtml = `<img src=${image.images.original.url} />`
            resultsHtml = resultsHtml + `<img src=${image.images.original.url} />`
        }

        $('#search-results').html(resultsHtml);
        
        });
    });
});