FlowRouter.route('/', {
  name: 'LoggedOut',
  action(){
    BlazeLayout.render("LoggedOut");
  }
});

FlowRouter.route('/dashboard', {
  name: 'Dashboard',
  action(){
    BlazeLayout.render("Dashboard");ß
  }
});
