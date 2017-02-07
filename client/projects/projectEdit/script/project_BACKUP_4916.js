Template.project.onCreated(function(){
  Session.set("editing",true);
})

Template.project.helpers({
    p: function(){
      var id = FlowRouter.getParam("id");
        return Projects.findOne({_id: id});
    }
});
<<<<<<< HEAD
// Session.set("editing", "false");
=======
>>>>>>> fdd13e3ab599ebc8d26afe91bb8afe5bad565dcd
