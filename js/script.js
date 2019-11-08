$(document).ready(function(){
	$('#yes').click(function(){
		alert('it worked!!!!');
	});
	// Hides home screen when site starts up
	$("#homeScreenContainer").hide();
	$("#mapScreenContainer").hide();
});

// When home screen button is clicked, hide the map container and show the home screen container
$("#homeScreenBtn").on('click', function(){
	$("#mapScreenContainer").hide();
	$("#homeScreenContainer").show();
});

// When the map button is clicked, hide the home screen container and show the map contianer
$("#userMapBtn").on('click', function(){
	$("#homeScreenContainer").hide();
	$("#mapScreenContainer").show();
});

var map;
function initMap() {
	var myLatLng = {lat: -41.279355, lng: 174.780143};

	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 14,
	  center: myLatLng
	});

	var marker = new google.maps.Marker({
	  position: myLatLng,
	  map: map,
	  title: 'Yoobee Wellington'
	});
}