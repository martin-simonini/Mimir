AutoForm.addHooks(['createProject'], {
  onSuccess: function() {
    FlashMessages.sendSuccess('Success!');
    FlowRouter.route("/dashboard");
  }
});
