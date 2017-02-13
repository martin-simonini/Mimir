Images = new Mongo.Collection('images');
EntriesImages = new FS.Collection('images', {
  stores: [new FS.Store.GridFS('EntriesImages')]
});

ImagesSchema = new SimpleSchema({
  image: {
    type: String,
    label: "Image"
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function(){
      return this.userId;
    },
    autoform: {
      type: "hidden"
    }
  },
  pin: {
    type: String,
    autoform: {
      type: 'hidden',
    }
  }
});

Images.attachSchema(ImagesSchema);

// Publishing the collections (server folder)
Meteor.publish('images', function(){
    return Images.find({author: this.userId});
});
Meteor.publish('EntriesImages', function(){
    return EntriesImages.find();
});
