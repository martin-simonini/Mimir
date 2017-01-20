Template.project.helpers({
    p: function(){
        var id = FlowRouter.getParam("id");
        return Projects.findOne({_id: id});
    },
    pins: function(){
        var id = FlowRouter.getParam("id");
        return Pins.find({project_id: id});
    }
});
