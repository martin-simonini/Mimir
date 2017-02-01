

Template.project.helpers({
    p: function(){
      var id = FlowRouter.getParam("id");
        return Projects.findOne({_id: id});
    }
});
