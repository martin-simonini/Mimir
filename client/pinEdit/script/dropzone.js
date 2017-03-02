Template.dropzone.events({
  'dropped #dropzone': function(event){
    var user = Meteor.user();

    FS.Utility.eachFile(event, function(file){
      var newFile = new FS.File(file);
      newFile.username = user.username;
      newFile.userId = user._id;

      Images.insert(newFile, function(error,fileObj){
        if(error){
          toastr.error("Upload failed... please try again.");
          console.log(error);
        } else {
          toastr.success('Upload succeeded!');
        }
      });
    });
  }
});
