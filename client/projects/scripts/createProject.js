AutoForm.addHooks(['createProject'], {
  onSuccess: function() {
    FlashMessages.sendSuccess('Success!');
    Router.go("/dashboard");
  }
});
