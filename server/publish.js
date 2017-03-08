/*Meteor.publish('Projects', function(){
  return project.find({});
})

/*
when currentUser is implemented:
  return Projects.find({author: this.userId});

  *finds only Projects of the current user.

  Meteor.publish('images', function(limit) {
  check(limit, Number);

  return Images.find({}, {
    limit: limit
  });
});
*/
