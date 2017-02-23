if (Meteor.isServer) {
  var videoStore = new FS.Store.S3("video", {
    /* REQUIRED */
    accessKeyId: Meteor.settings.AWSAccessKeyId,
    secretAccessKey: Meteor.settings.AWSSecretAccessKey,
    bucket: Meteor.settings.AWSBucket
  });

  Videos = new FS.Collection("Videos", {
    stores: [videoStore],
    filter: {
      allow: {
        contentTypes: ['video/*']
      }
    }
  });
}

// On the client just create a generic FS Store as don't have
// access (or want access) to S3 settings on client
if (Meteor.isClient) {
  var videoStore = new FS.Store.S3("videos");
  Videos = new FS.Collection("Videos", {
    stores: [videoStore],
    filter: {
      allow: {
        contentTypes: ['video/*']
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
  remove: function(userId, video){ return userId === video.userId;},
  download: function(){return true;}
});
