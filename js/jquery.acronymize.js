(function( $ ) {
	$.extend({
		acronymizer: function () {
			var text_input = $('input#text'),
	    		acronym_input = $('input#acronym');

			text_input.keyup(function(e){
			  
			  acronym_input.val('');

			  var text = text_input.val(),
						acronym = buildAcronym(text);
			  
			  if (acronym.length > 1) {
			    acronym_input.val(acronym);
			  }
			});

			buildAcronym = function(string) {
			  var acronym = string.replace(/[a-z\W]/g, '');
			  return acronym;
			}
		}
	});
}(jQuery));