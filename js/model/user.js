App.User = DS.Model.extend({
  // supported types: string, number, boolean, and date
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  isAwesome: DS.attr('boolean', { defaultValue: false }),
  dob: DS.attr('date', { defaultValue: new Date() }),
  numTodos: DS.attr('number', { defaultValue: 0 }),

  fullName: function(key, value) {
    
    if (!value) {
      // used as a getter
      return this.get('firstName') + ' ' + this.get('lastName');
    }

    // validate
    var name = User.parseFullName(value);
    if (!name) {
      return;
    }

    // commit
    this.set('firstName', name.firstName);
    this.set('lastName', name.lastName);
    this.save();
  }.property('firstName', 'lastName'),
});

var User = (function() {

  return {
    parseFullName : function(fullName) {
      var first = fullName.split(' ').slice(0, -1).join(' ');
      var last = fullName.split(' ').slice(-1).join(' ');

      // if (!first || !last) {
      //   return;
      // }

      return {
        firstName: first,
        lastName: last,
        isValid: function() {
          return this.first && this.last;
        },
      };
    },
  };
}());

App.User.FIXTURES = [
  {
    id: 1,
    firstName: "Scott",
    lastName: "Vossen",
    isAwesome: true,
    dob: new Date('5-31-1987'),
    numTodos: 1,
  },
  {
    id: 2,
    firstName: "Issac",
    lastName: "Alexander",
    isAwesome: true,
    dob: new Date('11-17-2013'),
    numTodos: 3,
  },
  {
    id: 3,
    firstName: "Paul",
    lastName: "Martin",
    isAwesome: false,
    dob: new Date('10-02-1956'),
    numTodos: 105,
  }
];
