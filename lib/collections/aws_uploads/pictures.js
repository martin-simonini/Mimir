if (Meteor.isServer) {
  var imageStore = new FS.Store.S3("images", {
    /* REQUIRED */
    accessKeyId: Meteor.settings.AWSAccessKeyId,
    secretAccessKey: Meteor.settings.AWSSecretAccessKey,
    bucket: Meteor.settings.AWSBucket
  });

  Images = new FS.Collection("Images", {
    stores: [imageStore],
    filter: {
      allow: {
        contentTypes: ['image/*']
      }
    }
  });
}

// On the client just create a generic FS Store as don't have
// access (or want access) to S3 settings on client
if (Meteor.isClient) {
  var imageStore = new FS.Store.S3("images");
  Images = new FS.Collection("Images", {
    stores: [imageStore],
    filter: {
      allow: {
        contentTypes: ['image/*']
      },
      onInvalid: function(message) {
        toastr.error(message);
      }
    }
  });
}

// Allow rules
Images.allow({
  insert: function(userId) { return userId != null; },
  update: function(userId) { return userId != null; },
  remove: function(userId, image){ return userId === image.userId;},
  download: function(){return true;}
});
