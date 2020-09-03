window.onload = function () {
  document.forms[0].reset()
  placeFocus()
}
function placeFocus() {
  document.forms[0].elements[0].focus() // assuming the first element
}

var placeSearch, autocomplete

var componentForm = {
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  postal_code: 'short_name',
}

function initAutocomplete() {
  // Create the autocomplete object, restricting the search predictions to
  // geographical location types.
  autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), { types: ['geocode'] })

  // Avoid paying for data that you don't need by restricting the set of
  // place fields that are returned to just the address components.
  autocomplete.setFields(['address_component'])

  // When the user selects an address from the drop-down, populate the
  // address fields in the form.
  autocomplete.addListener('place_changed', fillInAddress)
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace()

  for (var component in componentForm) {
    document.getElementById(component).value = ''
  }
  // Get each component of the address from the place details,
  // and then fill-in the corresponding field on the form.
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0]
    var fullAddress =
      place.address_components[0].long_name +
      ' ' +
      place.address_components[1].long_name

    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]]
      document.getElementById(addressType).value = val
    }
  }
  // This populates the search field with the street number and street name
  document.getElementById('autocomplete').value = fullAddress
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy,
      })
      autocomplete.setBounds(circle.getBounds())
    })
  }
}
