App.Router.map(function() {
	this.route("index", { path: "/" });
	this.resource('users', function() {
    	this.route('awesome');
	});
});

App.IndexRoute = Ember.Route.extend({
	redirect: function() {
		this.transitionTo('users');
	}
});

App.UsersRoute = Ember.Route.extend({
	model: function() {
		// return ['red', 'yellow', 'blue'];
		return this.store.find('user');
	}
});

App.UsersIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('users');
	}
});

App.UsersAwesomeRoute = Ember.Route.extend({
	model: function() {
		return this.store.filter('user', function(todo) {
			return !todo.get('isAwesome');
		});
	},

	renderTemplate: function(controller) {
		this.render('todos/index', { controller: controller });
	}
});