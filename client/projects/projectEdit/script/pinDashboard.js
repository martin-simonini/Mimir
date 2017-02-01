Template.pinDashboard.onCreated(function() {
    var self = this;
    self.autorun(function() {
      self.subscribe('pins');
    });
});

Template.pinDashboard.helpers({
  pins() {
    return pins.find({});
  }
});
