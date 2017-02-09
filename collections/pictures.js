Images = new Mongo.Collection('images');
EntriesImages = new FS.Collection('images', {
  stores: [new FS.Store.GridFS('EntriesImages')]
});

https://forums.meteor.com/t/upload-images-with-gridfs/16617
