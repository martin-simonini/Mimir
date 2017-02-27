import { Template } from 'meteor/templating';
import '../pinDashboard.html';
import './project.js'

Template.pinDashboard.helpers({
  pins() {
    var id = FlowRouter.getParam("id");
    return Pins.find({project_id: id}).fetch();
  }
});

Template.pinDashboard.events({
  'click .addPinButton': function(){
    Session.set("editing",true);
  },
  'click .edit': function(){
    Session.set("pin-id",this._id);
  }
})
