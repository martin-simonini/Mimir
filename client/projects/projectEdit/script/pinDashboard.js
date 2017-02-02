import { Template } from 'meteor/templating';
import '../pinDashboard.html';
import './project.js'

Template.pinDashboard.helpers({
  pins() {
    var id = FlowRouter.getParam("id");
    return Pins.find({project_id: id}).fetch();
  }
});
