var postsData = [
  {
    title: 'Skystone Website',
    url: 'http://www.skystone.ca/'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  },
  {
    title: 'Another Website',
    url: 'http://legrudgerugged.com'
  }
];

Template.postsList.helpers({
  posts: postsData
});
