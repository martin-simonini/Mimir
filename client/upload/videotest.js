// Template.videodropzone.events({
//   'dropped #videodropzone': function(event){
//     var user = Meteor.user();
//
//     FS.Utility.eachFile(event, function(file){
//       var newFile = new FS.File(file);
//       newFile.username = user.username;
//       newFile.userId = user._id;
//
//       Videos.insert(newFile, function(error,fileObj){
//         if(error){
//           toastr.error("Upload failed... please try again.");
//           console.log(error);
//         } else {
//           toastr.success('Upload succeeded!');
//         }
//       });
//     });
//   },
//   'click .delete-video': function(e) {
//     e.preventDefault();
//
//     var sure = confirm('Are you sure you want to delete this video?');
//     if (sure === true) {
//       Videos.remove({ _id:this._id }, function(error,result) {
//         if (error) {
//           toastr.error("Delete failed... " + error);
//         } else {
//           toastr.success('video deleted!');
//         }
//       })
//     }
//   }
// });
//
// Template.videotest.helpers({
//   'videos': function(){
//     console.log(Videos.find().fetch());
//     return Videos.find();
//   },
//   postDate: function(){
//     return moment(this.uploadAt).format("MMMM Do YYYY, h:mm:ss a");
//   },
//   ownVideo: function(){
//     return this.userId === Meteor.userId();
//   }
// });
