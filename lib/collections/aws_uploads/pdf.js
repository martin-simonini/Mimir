if (Meteor.isServer) {
  var pdfStore = new FS.Store.S3("pdfs", {
    /* REQUIRED */
    accessKeyId: Meteor.settings.AWSAccessKeyId,
    secretAccessKey: Meteor.settings.AWSSecretAccessKey,
    bucket: Meteor.settings.AWSBucket
  });

  Pdfs = new FS.Collection("Pdfs", {
    stores: [pdfStore],
    filter: {
      allow: {
        contentTypes: ['application/pdf']
      }
    }
  });
}

// On the client just create a generic FS Store as don't have
// access (or want access) to S3 settings on client
if (Meteor.isClient) {
  var pdfStore = new FS.Store.S3("pdfs");
  Pdfs = new FS.Collection("Pdfs", {
    stores: [pdfStore],
    filter: {
      allow: {
        contentTypes: ['application/pdf']
      },
      onInvalid: function(message) {
        toastr.error(message);
      }
    }
  });
}

// Allow rules
Pdfs.allow({
  insert: function(userId) { return userId != null; },
  update: function(userId) { return userId != null; },
  remove: function(userId, pdf){ return userId === pdf.userId;},
  download: function(){return true;}
});
