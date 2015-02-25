Package.describe({
  name: 'bitly',
  summary: 'Bitly Package',
  version: '1.0.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.3.2');
  api.addFiles('bitly.js', 'server');
  api.export('Bitly');
});
