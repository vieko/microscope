Comments = new Mongo.Collection('comments');

Meteor.methods({
  commentInsert: function (commentAttributes) {
    check(this.userId, String);
    check(commentAttributes, {
      postId: String,
      body: String
    });

    var user = Meteor.user();
    var post = Posts.findOne(commentAttributes.postId);
    if (!post) throw new Meteor.Error('invalid-comment', 'you must comment on a post');

    comment = _.extend(commentAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    // UPDATE: post with number of comments
    Posts.update(comment.postId, {$inc: {commentsCount: 1}});

    // CREATE: comment + save ID
    comment._id = Comments.insert(comment);

    // CREATE: notification + push notification to user
    createCommentNotification(comment);

    return comment._id;
  }
});
