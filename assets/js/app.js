// Todo web app
// app functionality checklist

$(function() {



    /*
        This selects the li elements on the list to make them
        grey and cross them out. It also undoes these actions.
    */
    $('li').click(function() {
        // turn black if gray
        if ($(this).css('color') === 'rgb(128, 128, 128)') {
            $(this).css({
                'color': 'black',
                'text-decoration': 'none'
            });
        }
        // turn grey if black
        else {
            $(this).css({
                'color': 'gray',
                'text-decoration': 'line-through'
            });
        }

    });



















});




