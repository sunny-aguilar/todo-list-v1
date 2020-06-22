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
        if (e.which === 13) {
            console.log($(this).val());
            $(this).val;
        }
    });














});




