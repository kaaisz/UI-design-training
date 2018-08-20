'use strict';

$(function(){
    //This is the sample for showing output
    $("form").on("submit", function(e){
        e.preventDefault();

        const keyValues = $(this).serialize();
        const inputValues = keyValues.split("&").map((keyValue) => {
            return $("<li>").text(decodeURIComponent(keyValue));
        });

        $(".result")
            .children().remove().end()
            .append(inputValues);
    });
})
