Template.Dashboard.onCreated(function() {
    var self = this;
    self.autorun(function() {
      self.subscribe('project');
    });
});

Template.Dashboard.helpers({
  project: ()=> {
    return Projects.find({});
  }
});
