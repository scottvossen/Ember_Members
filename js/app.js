App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

// fixture data
App.ApplicationAdapter = DS.FixtureAdapter.extend();

// local storage
// App.ApplicationAdapter = DS.LSAdapter.extend({
//   namespace: 'users-emberjs'
// });