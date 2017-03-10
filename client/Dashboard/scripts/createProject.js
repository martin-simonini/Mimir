var hooksObject = {
  after: {
    insert: function(){
      FlowRouter.go("Dashboard");
    }
  }
}

AutoForm.hooks({
  createProjectForm: hooksObject
});
