Template.project.onCreated(function(){
  Session.set("editing",false);
})

Template.project.helpers({
    editing: function(){
      return Session.get("editing");
    },
    p: function(){
      var id = FlowRouter.getParam("id");
        return Projects.findOne({_id: id});
    }
});
