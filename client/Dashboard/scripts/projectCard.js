Meteor.subscribe("project");

Template.projectCard.events({
  'click .delete-project': function(){
    FlowRouter.go('Dashboard');
    Project.remove(this._id);
  }
})
