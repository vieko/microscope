Package.describe({
  name: 'vieko:errors',
  version: '1.0.0',
  summary: 'A pattern to display application errors to the user',
  git: '',
  documentation: null
});

Package.onUse(function (api, where) {
  api.versionsFrom('1.0.3.1');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');

  if (api.export) api.export('Errors');
});

Package.onTest(function (api) {
  api.use('vieko:errors', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');

  api.addFiles('errors_tests.js', 'client');
});
