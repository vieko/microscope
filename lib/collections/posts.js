Posts = new Mongo.Collection('posts');

Posts.allow({
  update: function (userId, post) { return ownsDocument(userId, post); },
  remove: function (userId, post) { return ownsDocument(userId, post); }
});

Posts.deny({
  update: function (userId, post, fieldNames) {
    return (_.without(fieldNames, 'url', 'title').length > 0);
  }
});

Posts.deny({
  update: function (userId, post, fieldNames, modifier) {
    var errors = validatePost(modifier.$set);
    return errors.title || errors.url;
  }
});

validatePost = function (post) {
  var errors = {};

  if (!post.title) errors.title = 'please enter a title for this post';
  if (!post.url) errors.url = 'please enter a valid URL for this post';

  return errors;
};

Meteor.methods({
  postInsert: function (postAttributes) {
    check(Meteor.userId(), String);
    check(postAttributes, {
      title: String,
      url: String
    });

    var errors = validatePost(postAttributes);
    if (errors.title || errors.url)
      throw new Meteor.Error('invalid-post', 'a title + url must be set for each post');

    // if (Meteor.isServer) {
    //   postAttributes.title += ' (server)';
    //   Meteor._sleepForMs(3000);
    // } else {
    //   postAttributes.title += ' (client)';
    // }

    var postWithSameLink = Posts.findOne({url: postAttributes.url});
    if (postWithSameLink) {
      return {
        postExists: true,
        _id: postWithSameLink._id
      };
    }

    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date(),
      commentsCount: 0
    });

    var postId = Posts.insert(post);

    return {
      _id: postId
    };
  }
});
