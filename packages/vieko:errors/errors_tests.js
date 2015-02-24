Tinytest.add('Errors - collection', function (test) {

  test.equal(Errors.collection.find({}).count(), 0);

  Errors.throw('a new error has entered the ring!');

  test.equal(Errors.collection.find({}).count(), 1);

  Errors.collection.remove({});
});

Tinytest.addAsync('Errors - template', function (test, done) {

  Errors.throw('a new error has entered the ring!');
  test.equal(Errors.collection.find({}).count(), 1);

  // RENDER: template
  UI.insert(UI.render(Template.meteorErrors), document.body);

  Meteor.setTimeout(function () {
    test.equal(Errors.collection.find({}).count(), 0);
    done();
  }, 3500);
  
});
