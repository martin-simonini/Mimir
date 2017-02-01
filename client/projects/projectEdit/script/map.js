import { Template } from 'meteor/templating';
import '../map.html';
import './project.js'

var MAP_ZOOM = 15;

Meteor.startup(function(){
  GoogleMaps.load({key: "AIzaSyBo4kPT_k21FfWdXaUqsME3wqVUn7qhJSU" });
});


Template.map.helpers({
  pins() {
    return Pins.find().fetch();
  },
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

Template.map.onCreated(function(){
  GoogleMaps.ready('map',function(map){
    var markers = Pins.find().fetch();
    console.log(markers);
    for(let i = 0; i<markers.length;i++){
      var pin = new google.maps.Marker({
        position: new google.maps.LatLng(markers[i].Latitude,markers[i].Longitude),
        map: map.instance
      });
    }
  });
});


/* All these actions have been moved to another file, but I still have not
   copied this code.
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
})*/
