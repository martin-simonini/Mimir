Template.pinEdit.helpers({
  pin: function(){
    return Pins.findOne({_id: Session.get("pin-id")});
  }
})
