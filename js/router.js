App.Router.map(function() {
	this.route("index", { path: "/" });
	this.resource('users', function() {
    	this.route('awesome');
		this.resource('user', { path: ':user_id' }, function() {
			this.resource('todo', function() {
				this.route('active');
				this.route('completed');
			});
		});
		this.resource('todos', function() {
			this.route('active');
			this.route('completed');
		});
	});
	this.resource('about');
	this.resource('contact');
});

App.IndexRoute = Ember.Route.extend({
	redirect: function() {
		this.transitionTo('users');
	}
});

// =========== USERS ================
App.UsersRoute = Ember.Route.extend({
	model: function() {
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
		return this.store.filter('user', function(user) {
			return user.get('isAwesome');
		});
	},

	renderTemplate: function(controller) {
		this.render('users/index', { controller: controller });
	}
});

// =========== USER ================
App.UserRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('user', params.user_id);
	}
});

App.UserIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('user');
	}
});

// =========== TODOS ================
App.TodosRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('todo');
	}
});

App.TodosIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('todos');
	}
});

App.TodosActiveRoute = Ember.Route.extend({
	model: function() {
		return this.store.filter('todo', function(todo) {
			return !todo.get('isCompleted');
		});
	},

	renderTemplate: function(controller) {
		this.render('todos/index', { controller: controller });
	}
});

App.TodosCompletedRoute = Ember.Route.extend({
	model: function() {
		return this.store.filter('todo', function(todo) {
			return todo.get('isCompleted');
		});
	},

	renderTemplate: function(controller) {
		this.render('todos/index', { controller: controller });
	}
});