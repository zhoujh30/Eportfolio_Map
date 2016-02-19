$('#makeBlack').click(function() {
  $('#myFirstDiv').css('color', 'black')
  $('#myFirstDiv').css('background-color', '#cccccc');
});

$('#makeBlue').click(function() {
  $('#myFirstDiv').css('color', 'blue'),
  $('#myFirstDiv').css('background-color', '#bdd7e7');
});

$('#makeRed').click(function() {
  $('#myFirstDiv').css('color', 'red'),
  $('#myFirstDiv').css('background-color', '#fee5d9');
});

var myNumber = 36;

$('#addOne').click(
  function() {
    myNumber = myNumber + 1;
    $('#myNumber').text(myNumber);
    alert('Thanks for your feedback!');
  }
)

$(".mapButton").click(function() {

    if($(this).attr('id') == 'one' ) {
	  map.removeLayer(layer2)
	  map.removeLayer(layer3)
	  map.addLayer(layer1)
	  
      map.panTo(eastRiver, panOptions);

      } 
	 else if($(this).attr('id') == 'two' ) {
	  map.removeLayer(layer1)
	  map.removeLayer(layer3)
 	  map.addLayer(layer2)
      map.panTo(upperWestSide, panOptions);

      }
	 else if($(this).attr('id') == 'three' ) {
	  map.removeLayer(layer1)
	  map.removeLayer(layer2)
 	  map.addLayer(layer3)
      map.panTo(redhook, panOptions);

      }

    });