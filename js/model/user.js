App.User = DS.Model.extend({
  // supported types: string, number, boolean, and date
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  isAwesome: DS.attr('boolean'),
  dob: DS.attr('date'),
  numTodos: DS.attr('number'),

  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName'),
});

App.User.FIXTURES = [
  {
    id: 1,
    firstName: "Scott",
    lastName: 'Vossen',
    isAwesome: true,
    dob: new Date('5-31-1987'),
    numTodos: 1,
  },
  {
    id: 2,
    firstName: "Issac",
    lastName: 'Alexander',
    isAwesome: true,
    dob: new Date('11-17-2013'),
    numTodos: 3,
  },
  {
    id: 3,
    firstName: "Paul",
    lastName: 'Martin',
    isAwesome: false,
    dob: new Date('10-02-1956'),
    numTodos: 105,
  }
];
