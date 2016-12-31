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

ProjectSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
});

Projects.attachSchema(ProjectSchema);
