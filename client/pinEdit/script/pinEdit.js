var images = Images.find().fetch();
var videos = Videos.find().fetch();
var pdf = Pdfs.find().fetch();

var name,Latitude,Longitude,desc;
var update = false;

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
  // 'videos': function(){
  //   return videos.find();
  // },
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
    Latitude = $('[name=Latitude]').val();
    Longitude = $('[name=Longitude]').val();
    desc = $('[name=desc]').val();
    update = true;
  },
  'click .back': function(){
    Session.set("pinsTemplate","pinDashboard");
  }
});

if(Meteor.isServer){
  if(update){
    Pins.update({_id: Session.get("pin-id")},{
      $set:{
      name: name,
      Latitude: Latitude,
      Longitude: Longitude,
      desc: desc
    }},
    function(error, affectedDocs) {
          if (error) {
              throw new Meteor.Error(500, error.message);
          } else {
              return "Update Successful";
          }}
    );

  }
}
