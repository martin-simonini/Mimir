Template.project.onCreated(function(){
  Session.set("pinsTemplate", "pinDashboard");
  Session.set("mapTemplate","map");
})

Template.project.helpers({
    pinsTemplate: function(){
      return Session.get("pinsTemplate");
    },
    mapTemplate: function(){
      return Session.get("mapTemplate");
    },
    p: function(){
      var id = FlowRouter.getParam("id");
        return Projects.findOne({_id: id});
    }
});
