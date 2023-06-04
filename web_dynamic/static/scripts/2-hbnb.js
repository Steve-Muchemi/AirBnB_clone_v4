$(document).ready(function() {
  const amenityIDs = [];

//listen for changes on each checkbox
  $('input[type="checkbox"]').change(function() {
    const amenityID = $(this).data('id');
    const isChecked = $(this).is(':checked');

    if (isChecked) {
      amenityIDs.push(amenityID); // Store the Amenity ID
    } else {
      const index = amenityIDs.indexOf(amenityID);
      if (index > -1) {
        amenityIDs.splice(index, 1); // Remove the Amenity ID 
      }
    }

    // Updates h4 tags inside the div Amenities 
      $('.amenities h4').text('Amenities: ' + amenityIDs.join(', '));
    
  });

    // Make AJAX request to check API status
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    success: function(response) {
      if (response.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    }
  });


    
});
