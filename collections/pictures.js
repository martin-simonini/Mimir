if(Meteor.isServer){
  var imageStore - new FS.Store.S3("images", {
    acessKeyId: Meteor.settings.AWSAccessKeyId,
    secretAccessKey: Meteor.settings.AWSSecretAccessKey,
    bucket:Meteor.settings.AWSBucket
  });

  Images = new FS.Collection("Images", {
    store: [imagesStore],
    filter: {
      allow: {
        contentTypes: ['images/*']
      }
    }
  });
}

// On the client just create a generic FS Store as don't have
// access (or want access) to S3 settings on client
if(Meteor.isClient){
  var imageStore = new FS.Store.S3("images");
  Images = new FS.Collection("Images", {
    stores: [imageStore],
    filter: {
      allow: {
        contentTypes: ['image/*']
      },
      onInvalid: function(message){
        toastr.error(message);
      }
    }
  });
}

Images.allow({
  insert: function(){return true;},
  update: function(){return true;}
});
