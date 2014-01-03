App.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean'),
  user: DS.belongsTo('user'),

  isCompletedChanged: function() {
    // deal with the change
  }.observes('isCompleted').on('init')
});

App.Todo.FIXTURES = [
 {
   id: 1,
   title: 'Learn Ember.js',
   isCompleted: true,
   user: 1,
 },
 {
   id: 2,
   title: '...',
   isCompleted: false,
   user: 1,
 },
 {
   id: 3,
   title: 'Struggle',
   isCompleted: false,
   user: 2,
 },
 {
   id: 4,
   title: 'Profit!',
   isCompleted: false,
   // user: 2,
 }
];