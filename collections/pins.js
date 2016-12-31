/*
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

pinsSchema = new SimpleSchema({
  id: {
    type: Number,
  },
  name: {
    type: String
  },
  lat: {
    type: Number,
  },
  long: {
    type: Number,
  }
});

Pins.attachSchema(pinsSchema);
