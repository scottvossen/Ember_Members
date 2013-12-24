App.FocusedTextInput = Ember.TextField.extend({
	didInsertElement: function() {
		this.$().focus();
	}
});

Ember.Handlebars.helper('foused-text-input', App.EditFullNameView);