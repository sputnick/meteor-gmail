Package.describe({
  summary: "Simplest GMail API with real-time observation.",
  version: "0.0.1",
  git: "https://github.com/slava/meteor-gmail",
  name: "slava:gmail"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');
  api.use(['underscore', 'http'], 'server');
  api.use(['facts'], 'server', {weak: true});
  api.addFiles(['gmail.js', 'poller.js', 'listener.js'], 'server');
  api.export('GMail');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('gmail');
});