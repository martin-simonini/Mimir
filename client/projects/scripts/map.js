var MAP_ZOOM = 15;
var markers = {};
var project_id = FlowRouter.getParam("id");

Template.map.onCreated(function() {
    var self = this;
    self.autorun(function() {
      self.subscribe('pins');
    });
});
Template.map.helpers({
  pin: function(){
    console.log(Pins.find({project_id: project_id}));
    return Pins.find({project_id: project_id});
  }
})

Meteor.startup(function(){
  GoogleMaps.load({key: "AIzaSyBo4kPT_k21FfWdXaUqsME3wqVUn7qhJSU" });
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
  },
  'submit form': function(event){
    event.preventDefault();
    var name = $('[name=name]').val();
    var lat = $('[name=Latitude]').val();
    var long = $('[name=Longitude]').val();

    Pins.insert({
      name: name,
      project_id: project_id,
      Latitude: lat,
      Longitude: long,

    });
  }
})
