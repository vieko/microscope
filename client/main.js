Meteor.startup(function () {
  Tracker.autorun(function () {
    console.log('there are ' + Posts.find().count() + ' posts.');
  });
});
