Pins = new Mongo.Collection('pins');

pinsSchema = new SimpleSchema({
  name: {
    type: String,
    optional: true
  },
  lat: {
    type: Number,
    decimal: true,
  },
  long: {
    type: Number,
    decimal: true,
  },
  project_name: {
    type: String
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

Pins.attachSchema("pinsSchema");
