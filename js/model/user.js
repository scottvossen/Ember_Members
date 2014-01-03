App.User = DS.Model.extend({
  // supported types: string, number, boolean, and date
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  isAwesome: DS.attr('boolean', { defaultValue: false }),
  dob: DS.attr('date', { defaultValue: new Date() }),
  todos: DS.hasMany('todo', {async:true}),

  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName'),
});

App.User.FIXTURES = [
  {
    id: 1,
    firstName: "Scott",
    lastName: "Vossen",
    isAwesome: true,
    dob: new Date('5-31-1987'),
    todos: [1, 2],
  },
  {
    id: 2,
    firstName: "Issac",
    lastName: "Alexander",
    isAwesome: true,
    dob: new Date('11-17-2013'),
    todos: [3, 4],
  },
  {
    id: 3,
    firstName: "Paul",
    lastName: "Martin",
    isAwesome: false,
    dob: new Date('10-02-1956'),
    todos: [],
  }
];
