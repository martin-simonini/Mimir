Template.project.helpers({
    p: function(){
        var id = FlowRouter.getParam("id");
        return Projects.findOne({_id: id});
    }
});

Template.project.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(-37.8136, 144.9631),
        zoom: 8
      };
    }
  }
});

/*Template.project.helpers({
  pos: function(){
    if(navigator.geolocation){
      return navigator.geolocation.getCurrentPosition(function(position){
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        return pos;
      });
    }
  },
  projectMap: function(){
    if(GoogleMaps.loaded()){
      return{
        center: new google.maps.latLng(pos.lat,pos.lng),
        zoom: 8,
      };
    }
  }
});*/
