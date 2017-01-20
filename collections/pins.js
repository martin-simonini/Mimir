/* note:
  only allo the user to create pins after the project has been created,
  in the project editing page.

  Personal notes:
    What is a Pin: A pin is a geolocation where the user will be able to add
    information such as text, video, audio, and pictures.

    Needed information:
      Latitude and Logitude: where in the world the pin should be
      Name: so user can remember what the pin is representing
      ID: so other systems can find the pin
      added Media: all the media that the user added to the pin.

      for now omitt the added information.
  */
Pins = new Mongo.Collection('pins');

Pins.allow({
  insert: function(userId, doc){
    return !!userId;
  }
});

PinsSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Pin Name",
    optional: true
  },
  Latitude: {
    type: Number,
    label: "Latitude",
    decimal: true
  },
  Longitude: {
    type: Number,
    label: "Longitude",
    decimal: true
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

Pins.attachSchema(PinsSchema);
