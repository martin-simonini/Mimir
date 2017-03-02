var images = Images.find().fetch();
Template.pinEdit.helpers({
  pin: function(){
    return Pins.findOne({_id: Session.get("pin-id")});
  },
  images: function(){
    return images;
  },
  name: function(){
    return images[original].name;
  },
  numOfpics: function(){
    return Images.find().count();
  },
  'images': function() {
    return Images.find();
  }
})
