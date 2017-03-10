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

Template.Dashboard.events({
  'click .deleteProject': function(){
    Projects.remove(this._id);
  }
})
