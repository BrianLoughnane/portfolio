

$(document).ready(function() {


 $("header, footer, section>div").on("click", function() {

    if($("header, footer, section>div").hasClass("red-lg")) {
        $(this).removeClass("red-lg");
        $(this).addClass("tan-lg");
    }
    else if($("header, footer, section>div").hasClass("blue-lg")) {
        $(this).removeClass("blue-lg");
        $(this).addClass("red-lg");
 
    } 
    else if($("header, footer, section>div").hasClass("tan-lg")) {
        $(this).removeClass("tan-lg");
        $(this).addClass("green-lg");
    }
    else if($("header, footer, section>div").hasClass("green-lg")) {
        $(this).removeClass("green-lg");
        $(this).addClass("blue-lg");
    }
    
    });  

 
 // $("header").on("click", function() {
 //    if($("header").hasClass("red-lg")) {
 //        $(this).removeClass("red-lg");
 //        $(this).addClass("tan-lg");
 //    }
 //    else if($("header").hasClass("blue-lg")) {
 //        $(this).removeClass("blue-lg");
 //        $(this).addClass("red-lg");
 
 //    } 
 //    else if($("header").hasClass("green-lg")) {
 //        $(this).removeClass("green-lg");
 //        $(this).addClass("blue-lg");
 //    }
 //    else if($("header").hasClass("tan-lg")) {
 //        $(this).removeClass("tan-lg");
 //        $(this).addClass("green-lg");
 //    }
 
 //    });  

   
});
