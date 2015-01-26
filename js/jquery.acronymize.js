'"use strict"';

(function( $ ) {
	$.extend({
		acronymizer: function () {

			// Set variables for inputs
			var text_input = $('input#text'),
	    		acronym_input = $('input#acronym');

			text_input.keyup(function(e){
			  
			  acronym_input.val('');

				
			console.log(acronym)

			  var text = text_input.val(),
						acronym = buildAcronym(text);			
				   
			  if (acronym.length > 1) {
			    acronym_input.val(acronym);
			  }
			});

			// Use a regular expresion to remove lower case and whitespace chars
			buildAcronym = function(string) {
			  var acronym = string.replace(/[a-z\W]/g, '');
			  return acronym;
			}
		}
	});
}(jQuery));