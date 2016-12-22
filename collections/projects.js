Projects = new Mongo.Collection('project');

ProjectSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
});

Projects.attachSchema(ProjectSchema);
