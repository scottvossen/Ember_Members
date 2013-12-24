App.FocusedTextInput = Ember.TextField.extend({
	didInsertElement: function() {
		this.$().focus();
	}
});

Ember.Handlebars.helper('focused-text-input', App.FocusedTextInput);