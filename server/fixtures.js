if (Posts.find().count() === 0) {
  Posts.insert({
    title:  'A Website',
    url: 'http://legrudgerugged.com'
  });
  Posts.insert({
    title:  'Another Website',
    url: 'http://www.skystone.ca'
  });
  Posts.insert({
    title:  'A Third Website',
    url: 'http://krunchgame.com'
  });
}
