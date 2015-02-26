Package.describe({
  name: 'intercom',
  summary: 'Intercom Package',
  version: '1.0.0'
});

Package.on_use(function (api) {
  api.versionsFrom('1.0.3.2');
  api.add_files('intercom_loader.js', 'client');
});
