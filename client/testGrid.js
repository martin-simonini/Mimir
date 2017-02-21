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
  },
  'click .delete-image': function(e) {
    e.preventDefault();

    var sure = confirm('Are you sure you want to delete this image?');
    if (sure === true) {
      Images.remove({ _id:this._id }, function(error,result) {
        if (error) {
          toastr.error("Delete failed... " + error);
        } else {
          toastr.success('Image deleted!');
        }
      })
    }
  }
});

Template.testGrid.helpers({
  'images': function(){
    return Images.find();
  },
  postDate: function(){
    return moment(this.uploadAt).format("MMMM Do YYYY, h:mm:ss a");
  },
  ownImage: function(){
    return this.userId === Meteor.userId();
  }
});
