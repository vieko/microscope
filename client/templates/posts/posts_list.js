Template.postsList.rendered = function () {
  this.find('.wrapper')._uihooks = {
    insertElement: function (node, next) {
      $(node)
        .hide()
        .insertBefore(next)
        .fadeIn();
    },
    moveElement: function (node, next) {
      var $node = $(node), $next = $(next);
      var oldTop = $node.offset().top;
      var height = $node.outerHeight(true);

      // FIND: all elements between next and node
      var $inBetween = $next.nextUntil(node);
      if ($inBetween.length === 0) $inBetween = $node.nextUntil(next);

      // PUT: node in place
      $node.insertBefore(next);

      // MEASURE: new top
      var newTop = $node.offset().top;

      // MOVE: node back to where it was before
      $node
        .removeClass('animate')
        .css('top', oldTop - newTop);

      // PUSH: every other element down (or up)
      $inBetween
        .removeClass('animate')
        .css('top', oldTop < newTop ? height : -1 * height);

      // FORCE: redraw
      $node.offset();

      // RESET: everything to zero, animated
      $node.addClass('animate').css('top', 0);
      $inBetween.addClass('animate').css('top', 0);
    },
    removeElement: function (node) {
      $(node).fadeOut(function () {
        $(this).remove();
      });
    }
  };
};
