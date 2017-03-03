var images = Images.find().fetch();
var videos = Videos.find().fetch();
var pdf = Pdfs.find().fetch();

Template.pinEdit.helpers({
  pin: function(){
    return Pins.findOne({_id: Session.get("pin-id")});
  },
  name: function(){
    return images[original].name;
  },
  numOfpics: function(){
    return Images.find().count();
  },
  'images': function() {
    return Images.find();
  },
  numOfVideos: function(){
    return Videos.find().count();
  },
  'videos': function(){
    return videos.find();
  },
  numOfPdf: function(){
    return Pdfs.find().count();
  },
  pdf: function(){
    return pdf;
  }
});

Template.pinEdit.events({
  'click .submit': function(e){
    e.preventDefault();
    var name = $('[name=name]').val();
    var Latitude = $('[Latitude=Latitude]').val();
    var Longitude = $('[Longitude=Longitude]').val();
    var desc = $('[desc=desc]').val();
    Pins.update(Session.get("pin-id"),{
      $set:{
      name: name,
      Latitude: Latitude,
      Longitude: Longitude,
      desc: desc,
    }});
  }
})
