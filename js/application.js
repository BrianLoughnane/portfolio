

$(document).ready(function() {


 $("header, footer div").on("click", function() {

    if($(this).hasClass("red-lg")) {
        $(this).removeClass("red-lg");
        $(this).addClass("tan-lg");
    }
    else if($(this).hasClass("tan-lg")) {
        $(this).removeClass("tan-lg");
        $(this).addClass("green-lg");
    }
    else if($(this).hasClass("blue-lg")) {
        $(this).removeClass("blue-lg");
        $(this).addClass("red-lg");
 
    } 
    else if($(this).hasClass("green-lg")) {
        $(this).removeClass("green-lg");
        $(this).addClass("blue-lg");
    }
    
    });  

 $("section div").on("click", function() {

    if($(this).hasClass("red-lg")) {
        $(this).removeClass("red-lg");
        $(this).addClass("tan-lg");
    }
    else if($(this).hasClass("tan-lg")) {
        $(this).removeClass("tan-lg");
        $(this).addClass("green-lg");
    }
    else if($(this).hasClass("blue-lg")) {
        $(this).removeClass("blue-lg");
        $(this).addClass("red-lg");
 
    } 
    else if($(this).hasClass("green-lg")) {
        $(this).removeClass("green-lg");
        $(this).addClass("blue-lg");
    }

    }); 

   
});
