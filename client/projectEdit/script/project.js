Template.project.onCreated(function(){
  Session.set("pinsTemplate", "pinDashboard");
})

Template.project.helpers({
    pinsTemplate: function(){
      return Session.get("pinsTemplate");
    },
    p: function(){
      var id = FlowRouter.getParam("id");
        return Projects.findOne({_id: id});
    }
});
