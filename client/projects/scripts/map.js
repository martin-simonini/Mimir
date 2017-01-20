var MAP_ZOOM = 15;

Meteor.startup(function(){
  GoogleMaps.load({key: "AIzaSyBo4kPT_k21FfWdXaUqsME3wqVUn7qhJSU" });
});

Template.map.onCreated(function() {
});

Template.map.helpers({
  geolocationError: function() {
    var error = Geolocation.error();
    return error && error.message;
  },
  mapOptions: function() {
    var latLng = Geolocation.latLng();
    // Initialize the map once we have the latLng.
    if (GoogleMaps.loaded() && latLng) {
      return {
        center: new google.maps.LatLng(latLng.lat, latLng.lng),
        zoom: MAP_ZOOM
      };
    }
  },
});

Template.map.events({
  'click .addPinButton': function(){
    $('.pin_editor').addClass('hidden');
    $('.pin_create').removeClass('hidden');
  },
  'click .cancelNewPinButton': function(){
    $('.pin_create').addClass('hidden');
    $('.pin_editor').removeClass('hidden');
  }
})
