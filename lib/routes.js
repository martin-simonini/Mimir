FlowRouter.route('/', {
  name: 'LoggedOut',
  action(){
    BlazeLayout.render("LoggedOut");
  }
});

FlowRouter.route('/dashboard', {
  name: 'Dashboard',
  action(){
    BlazeLayout.render("MainLayout",{main:"Dashboard"});
  }
});

FlowRouter.route('/newProject',{ //IDK if this route will stay, test for now
  name: 'createProject',
  action(){
    BlazeLayout.render("createProject");
  }
});
