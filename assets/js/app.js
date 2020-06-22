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
        $(this).parent().remove();
        e.stopPropagation();
    });
















});




