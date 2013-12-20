App.UserController = Ember.ObjectController.extend({

  isEditing: false,

  isAwesome: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return model.get('isAwesome');
    } else {
      // property being used as a setter
      model.set('isAwesome', value);
      model.save();
      return value;
    }
  }.property('model.isAwesome'),

  actions: {

   editUser: function() {
     this.set('isEditing', true);
   },
   
   acceptChanges: function() {
      this.set('isEditing', false);

      if (Ember.isEmpty(this.get('model.title'))) {
        this.send('removeUser');
      } else {
        this.get('model').save();
      }
   },

    removeUser: function() {
      var user = this.get('model');
      user.deleteRecord();
      user.save();
    },

    toggleAwesomeness: function() {
      this.set('isAwesome', !this.get('isAwesome'));
    },
  }
});