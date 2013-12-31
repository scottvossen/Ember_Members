App.UsersController = 
App.UsersIndexController = 
App.UsersAwesomeController = Ember.ArrayController.extend({
  sortProperties: ['lastName', 'firstName'],
  sortAscending: true,

  awesome: function() {
    return this.filterBy('isAwesome', true).get('length');
  }.property('@each.isAwesome'),

  total: function() {
    return this.get('length');
  }.property('length'),

  actions: {
    createUser: function() {
      // Get the new user name set by the "New User" text field
      var fullName = this.get('newUserFullName');
      if (!fullName || !fullName.trim()) { return; }

      var first = fullName.split(' ').slice(0, -1).join(' ');
      var last = fullName.split(' ').slice(-1).join(' ');

      if (!first || !last) {
        return;
      }

      // Create the new Todo model
      var user = this.store.createRecord('user', {
        firstName: first,
        lastName: last,
      });

      // Clear the "New User" text field
      this.set('newUserFullName', '');

      // Save the new model
      user.save();
    },
  },
});