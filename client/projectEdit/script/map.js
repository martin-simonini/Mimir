import { Template } from 'meteor/templating';
import '../map.html';
import './project.js'

var MAP_ZOOM = 12;

Meteor.startup(function(){
  GoogleMaps.load({key: "AIzaSyBo4kPT_k21FfWdXaUqsME3wqVUn7qhJSU" });
});


Template.map.helpers({
  pins() {
    var id = FlowRouter.getParam("id");
    return Pins.find({project_id: id}).fetch();
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
    var id = FlowRouter.getParam("id");
    var markers = Pins.find({project_id: id}).fetch();
    for(let i = 0; i<markers.length;i++){
      var pin = new google.maps.Marker({
        position: new google.maps.LatLng(markers[i].Latitude,markers[i].Longitude),
        animation: google.maps.Animation.DROP,
        draggable: true,
        map: map.instance
      });
    }
    google.maps.event.addListener(markers, 'dragend', function(event) {
      console.log("got here!");
      Pins.update(markers.id, { $set: { lat: event.latLng.lat(), lng: event.latLng.lng() }});
    });
  });
});
