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
});
