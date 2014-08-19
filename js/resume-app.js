$(document).ready(function() {
	console.log("working");
	$("#navPurpose").on("click", function() {
		$("body")
		.animate(
			{scrollTop: 39}, 
			1500
		);
	});	

	$("#navExperience").on("click", function() {
		$("body")
		.animate(
			{scrollTop: 352}, 
			1500
		);
	});	

	$("#navEducation").on("click", function() {
		$("body")
		.animate(
			{scrollTop: 1492}, 
			1500
		);
	});	

	// $("#navInterests").on("click", function() {
	// 	$("body")
	// 	.animate(
	// 		{scrollTop: 0}, 
	// 		1500
	// 	);
	// });	

	$("#navLanguages").on("click", function() {
		$("body")
		.animate(
			{scrollTop: 1865}, 
			1500
		);
	});	


});

