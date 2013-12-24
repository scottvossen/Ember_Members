var EmberHelper = (function() {

	var _templatesDir = 'js/templates/';
	var _templateExt = '.handlebars';
	var _precompiledTemplateExt = '.hbs';

	function getTemplatePath(name, fileName, isPrecompiled) {

		if (!fileName) {

			// for templates like 'users/index':
			// substitute any '/' for '__' as per naming conventions
			var find = '/';
			var re = new RegExp(find, 'g');
			fileName = name.replace(re, '__');
		}

		if (!isPrecompiled) {
			return templatePath = _templatesDir + fileName + _templateExt;
		} else {
			return templatePath = _templatesDir + fileName + _precompiledTemplateExt		};

	}

	function urlExists(url)
	{
		// TODO:
		// Find a way to do this without causing console 404 errors.
		// Looks like you can't without using serverside js.
		
		// NOTE: This is essentially the same as the jquery call in getTemplate anyways..
	    var http = new XMLHttpRequest();
	    http.open('HEAD', url, false);
	    http.send();
	    return http.status!=404;
	}

	function getTemplate(templatePath) {

		var template;
		
		if (urlExists(templatePath)) {
			$.ajax({
				url: templatePath,
			    async:false,
			    success: function(data) {
			    	template = data;
			    },
		      	error: function (xhr, ajaxOptions, thrownError) {
		      		template = null;
		      	}
			 });
		}

		return template;
	}

	return {
		loadTemplate : function(name, fileName) {
			// supports templates like 'users/index' by using second, optional param for file name
			// http://stackoverflow.com/questions/18566795/ember-hbs-templates-as-separate-files

			// precompiled versions are preferred
			var templatePath = getTemplatePath(name, fileName, true);
			var template = getTemplate(templatePath);

			if (!template) {

				// fallback to using uncompiled version
				templatePath = getTemplatePath(name, fileName);
				template = getTemplate(templatePath);

				if (!template) {
					throw new Error("Template " + name + " not found!");
				}
				
				// use uncompiled template
				Ember.TEMPLATES[name] = Ember.Handlebars.compile(template);
				return;
			}
			
			// use compiled template
			Ember.TEMPLATES[name] = Ember.Handlebars.template(template);
		},
	};
}());