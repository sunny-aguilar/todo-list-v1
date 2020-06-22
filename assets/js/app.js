// Todo web app
// app functionality checklist

$(function() {



    /*
        This selects the li elements on the list to make them
        grey and cross them out. It also undoes these actions.
    */
    $('li').click(function() {
        $(this).toggleClass('completed');
    });


    // click on delete button
    $('span').click(function(e){
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
        });
        e.stopPropagation();
    });


    // this adds a new item to the list when a user hits the enter key
    $('input[type="text"]').keypress(function(e) {
        // if user hits the enter keyu
        if (e.which === 13) {
            // grab the text in the input field
            let todoText = $(this).val();

            // clear input
            $(this).val() == '';

            // create a new li and add to ul
            $('ul').append('<li><span>XX</span> ' + todoText + '</li>')
        }
    });














});




