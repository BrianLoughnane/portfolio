// $(document).ready(function() {

// 	$(alert("hello world"));

// 	$("header").on("click", function() {
// 		if($("header").hasClass("red-lg")) {
// 			$(this).removeClass("red-lg");
// 			$(this).addClass("tan-lg");
// 		};	
// 	});	

	
// 	$("header").on("click", function() {
// 		if($("header").hasClass("blue-lg")) {
// 			$(this).removeClass("blue-lg");
// 			$(this).addClass("red-lg");
// 		};	
// 	});

// 	if($("header").hasClass("green-lg")) {
// 		$("header").on("click", function() {
// 			$(this).removeClass("green-lg");
// 			$(this).addClass("blue-lg");
// 		});
// 	}; 

	
// });



// $(document).ready(function() {
//  $("header").on("click", function() {
//     if($("header").hasClass("red-lg")) {
//         $(this).removeClass("red-lg");
//         $(this).addClass("tan-lg");
//     }
//     else if($("header").hasClass("blue-lg")) {
//         $(this).removeClass("blue-lg");
//         $(this).addClass("red-lg");
 
//     } 
//     else if($("header").hasClass("green-lg")) {
//         $(this).removeClass("green-lg");
//         $(this).addClass("blue-lg");
//     }
//     }); 
//  console.log("hello world");
   
// });

$(document).ready(function() {
 $("header").on("click", function() {
    if($("header").hasClass("red-lg")) {
        $(this).removeClass("red-lg");
        $(this).addClass("tan-lg");
    }
    else if($("header").hasClass("blue-lg")) {
        $(this).removeClass("blue-lg");
        $(this).addClass("red-lg");
 
    } 
    else if($("header").hasClass("green-lg")) {
        $(this).removeClass("green-lg");
        $(this).addClass("blue-lg");
    }
    else if($("header").hasClass("tan-lg")) {
        $(this).removeClass("tan-lg");
        $(this).addClass("green-lg");
    }
 
    }); 
 
 
 console.log("hello world");
   
});
