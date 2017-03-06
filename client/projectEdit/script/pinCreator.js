Template.pinCreator.onCreated(function(){
  Session.set("mapTemplate","map_editable");
})
Template.pinCreator.events({
  'click .cancelNewPinButton': function(){
    Session.set("pinsTemplate", "pinDashboard");
  },
  'submit form': function(event){
   event.preventDefault();
   var name = $('[name=name]').val();
   var lat = $('[name=Latitude]').val();
   var long = $('[name=Longitude]').val();
   var project_id = FlowRouter.getParam('id');

   Pins.insert({
     name: name,
     project_id: project_id,
     Latitude: lat,
     Longitude: long,

   });
   Session.set("pinsTemplate", "pinDashboard");
   Session.set("mapTemplate", "map");
 }
})
