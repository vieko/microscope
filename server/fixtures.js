if (Posts.find().count() === 0) {

  // SET: time
  var now = new Date().getTime();

  // CREATE: two users
  var adminId = Meteor.users.insert({
    profile: { name: 'Administrator Maximus' }
  });
  var admin = Meteor.users.findOne(adminId);
  var androId = Meteor.users.insert({
    profile: { name: 'Andro Franetovic' }
  });
  var andro = Meteor.users.findOne(androId);

  var legrId = Posts.insert({
    title: 'LeGrudge + Rugged',
    userId: admin._id,
    author: admin.profile.name,
    url: 'http://legrudgerugged.com/',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2,
    upvoters: [],
    votes: 0,
    clicks: 0
  });

  Comments.insert({
    postId: legrId,
    userId: andro._id,
    author: andro.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'derp derp derp derp commenting derp derp'
  });

  Comments.insert({
    postId: legrId,
    userId: admin._id,
    author: admin.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'yar yar yar of course, yar yar derp yar'
  });

  Posts.insert({
    title: 'Skystone Website (current)',
    userId: andro._id,
    author: andro.profile.name,
    url: 'http://www.skystone.ca/',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [],
    votes: 0,
    clicks: 0
  });

  Posts.insert({
    title: 'KRUNCH',
    userId: admin._id,
    author: admin.profile.name,
    url: 'http://www.krunchgame.com/',
    submitted: new Date(now - 12 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [],
    votes: 0,
    clicks: 0
  });

  for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: 'Test post #' + i,
      author: admin.profile.name,
      userId: admin._id,
      url: 'http://google.com/?q=test-' + i,
      submitted: new Date(now - i * 3600 * 1000),
      commentsCount: 0,
      upvoters: [],
      votes: 0,
      clicks: 0
    });
  }
}
