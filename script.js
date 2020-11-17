$(document).ready(function () {
    $('#search-button').on('click', () => {
    //creates json for adding limit
        let gifsDisplayed = $('#search-limit').val();
        //creates json for search request
        let searchTerm = $('#search-field').val();
    //combines variable into api url to fetch information
        let url = "https://api.giphy.com/v1/gifs/search?api_key=FoVxkgXu1a1oBtFmJhHjo3YC7PtgtcPb&q=" + searchTerm + '&limit=' + gifsDisplayed;
       
    //calls the server using my api key
        $.get(url, function(giphyResponse) {
         
        let resultsHtml = '';

    //creates a loop that parses all of the img data
        for(let image of giphyResponse.data){
            let imgHtml = `<img class="img-fluid mx-auto col-12 col-lg-4 p-3" src=${image.images.original.url}/>`
            resultsHtml = resultsHtml + imgHtml;
        }
    //replaces the empty div in index.html with the img elements
        $('#search-results').html(resultsHtml);
        
        });
    });

    //enter key functionality
    $('#my-form').on('submit', (event) => {
        event.preventDefault();
        
        if(keycode == '13'){
            $('search-button').click();  
        }
    });
    
    //shows back to top button on scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

});