Accounts.onLogin(function(){
  FlowRouter.go('Dashboard');
});

Accounts.onLogout(function(){
  FlowRouter.go('LoggedOut');
});

FlowRouter.triggers.enter([function(context, redirect){
    if(context.path === "/register"){
      FlowRouter.go("/register");
    }
    else if(!Meteor.userId()){
      FlowRouter.go('LoggedOut');
    }
}]);

FlowRouter.route('/', {
  name: 'LoggedOut',
  action(){
    if(Meteor.userId()){
      FlowRouter.go('Dashboard');
    }
    BlazeLayout.render("LoggedOut");
  }
});

FlowRouter.route('/dashboard', {
  name: 'Dashboard',
  action(){
    BlazeLayout.render("MainLayout",{main:"Dashboard"});
  }
});

FlowRouter.route('/project/:id',{
  name: 'project',
  action(){
    BlazeLayout.render("MainLayout",{main:"project"})
  }
});

FlowRouter.route('/newProject',{ //IDK if this route will stay, test for now
  name: 'createProject',
  action(){
    BlazeLayout.render("createProject");
  }
});
FlowRouter.route('/register',{
  name: 'register',
  action(){
    BlazeLayout.render("register");
  }
});

FlowRouter.route('/mapContainer',{
  name: "mapContainer",
  action(){
    BlazeLayout.render("mapContainer");
  }
});

//this route is just a test of GridFS, remove before deployment
FlowRouter.route('/testGrid',{
  name: "testGrid",
  action(){
    BlazeLayout.render("testGrid");
  }
});
