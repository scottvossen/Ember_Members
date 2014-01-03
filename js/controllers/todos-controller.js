App.TodosController = Ember.ArrayController.extend({
   needs: ['user'],

  remaining: function() {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  completed: function() {
    return this.filterBy('isCompleted', true).get('length');
  }.property('@each.isCompleted'),

  inflection: function() {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'item' : 'items';
  }.property('remaining'),

  hasCompleted: function() {
    return this.get('completed') > 0;
  }.property('completed'),
  
  allAreDone: function (key, value) {
    if (value === undefined) {
      return !!this.get('length') && this.everyBy('isCompleted', true);
    } else {
      this.setEach('isCompleted', value);
      this.invoke('save');
      return value;
    }
  }.property('@each.isCompleted'),

  actions: {
    createTodo: function() {
      // Get the todo title set by the "New Todo" text field
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      var user = this.get('controllers.user.content');
      var todo = this.get('store').createRecord('todo', { 
        user: user, 
        title: title, 
        isCompleted: false 
      });

      todo.save().then(function(todo){
        user.get('todos').pushObject(todo);
        // user.save();
      });

      // Clear the "New Todo" text field
      this.set('newTitle', '');
    },

    clearCompleted: function() {
      var completed = this.filterBy('isCompleted', true);
      completed.invoke('deleteRecord');
      completed.invoke('save');
    },
  },
});