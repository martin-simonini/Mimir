/*
  Notes:
    This projects collection represents each tour the user will create. This will
    be what the user will create for tours and information centers.

    Needed Info:
      Pins: All the locations that the user would like to highlight on their
            tours
     Route: (optional) the series of pins that the user will follow.
     Name: Name of the project.
*/


Projects = new Mongo.Collection('project');

Projects.allow({
  insert: function(userId, doc){
    return !!userId;
  }
});

ProjectSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  desc: {
    type: String,
    label: "Description"
  },

  createdBy: {
    type: String,
    label: "author",
    autoValue: function(){
      return Meteor.userId();
    },
    autoform: {
      type: 'hidden',
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function(){
      return new Date();
    },
    autoform: {
      type: "hidden",
    }
  }
});



Projects.attachSchema(ProjectSchema);
