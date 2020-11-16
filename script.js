$(document).ready(function () {
    console.log( "ready!" );
    $('#search-button').on('click', () => {
        let searchTerm = $('#search-field').val();
        let url = "https://api.giphy.com/v1/gifs/search?api_key=FoVxkgXu1a1oBtFmJhHjo3YC7PtgtcPb&q=" + searchTerm;
        $.get(url, function(giphyResponse) {
         
        let resultsHtml = '';
        for(let image of giphyResponse.data){
            let imgHtml = `<img class="img-fluid mx-auto col-12 col-lg-4 p-3" src=${image.images.original.url}/>`
            resultsHtml = resultsHtml + imgHtml;
        }

        $('#search-results').html(resultsHtml);
        
        });
    });

    $('#navBurger').on('ckick', () => {

    });
});