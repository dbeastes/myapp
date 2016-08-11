(function(window) {
	"use strict";
	var AKMD = {

		modal : function( options ){

			// Title
			if(options.title) $('#myModal .modal-title').text(options.title);

			// Content
			if(options.content) $('#myModal .modal-body').html(options.content);
			
			// Event - Cancel			
			if(options.cancel){
				$('#myModal .modal-footer .btn-default').on('click', function(e){
					options.cancel();
					// Reset the click handler.
					$('#myModal .modal-footer .btn-default').off('click');
				});
			}
			
			// Event - Save
			if(options.save){
				$('#myModal .modal-footer .btn-primary').on('click', function(e){
					console.log('EVENT FIRED');
					options.save();
					// Reset the click handler.
					$('#myModal .modal-footer .btn-primary').off('click');
				});
			}
			
			if(options.url){
				
				$.ajax({
					url                 : options.url,
					type                : 'get',
					beforeSend          : function(){
			
					},
					success             : function (res) {

						$('#myModal .modal-body').html(res);

						// Bootstrap fix
						$('#myModal').css('display','block');

						if(options.onload){
							options.onload();
						}
		
						// Display the modal
						$('#myModal').modal({show:true});
					}
				});
				
			}else{
				// Bootstrap fix
				$('#myModal').css('display','block');
			
				// Display the modal
				$('#myModal').modal({show:true});			
			}
		},

		ajaxModal : function( options ){
			
			$.ajax({
				url                 : options.url,
				type                : 'get',
				dataType            : 'json',
				beforeSend          : function(){
				
				},
				success             : function (res) {
					
					var form = ' ';
					form = '';
					
					if(res.length > 1){
						for(var i=0; i<res.length; i++) {
							var pairs = '';
							
							if ( i==0 ) form = '';
						
							form = form + '<form id="collectionForm' + i + '" method="put" action="/' + options.url + '" role="form">'
									+	'<div class="form-group">'
									+		'<input class="hidden" type="text" name="_csrf" value="' + AKMD.CSRF + '">'
									+	'</div>'
								
							$.each(res[i],function(k, v) {
								switch(k){
									case "__v":
										break;
									case "_csrf":
										break;
									case "_id":
											form = form 	+ '<div class="form-group">'
												+		'<label for="' + k + '">' + k + '</label>'
												+		'<input class="form-control" type="text" name="' + k + '" value="' + v + '" readonly/>'
												+ '</div>'									
										break;
									case "createdAt":
											form = form 	+ '<div class="form-group">'
												+		'<label for="' + k + '">' + k + '</label>'
												+		'<input class="form-control" type="text" name="' + k + '" value="' + v + '" readonly/>'
												+ '</div>'									
										break;
									case "updatedAt":
											form = form 	+ '<div class="form-group">'
												+		'<label for="' + k + '">' + k + '</label>'
												+		'<input class="form-control" type="text" name="' + k + '" value="' + v + '" readonly/>'
												+ '</div>'									
										break;									
									default:
											form = form 	+ '<div class="form-group">'
												+		'<label for="' + k + '">' + k + '</label>'
												+		'<input class="form-control" type="text" name="' + k + '" value="' + v + '"/>'
												+ '</div>'
										break;
								}							
							});
						
							// FORM CONTROLS
							form = form + '<button class="btn btn-primary" type="submit"> Save </button>'
						
							// TODO: SEPERATER
							form = form + '<div style="width:100%;border-bottom-style: solid; border-bottom-width: thin;margin-top: 20px;"> </div>'
						
							form = form + '</form>'
						}
					}else{
						
						form = 	'<form id="collectionForm" method="put" action="/' + options.url + '" role="form">'
								+	'<div class="form-group">'
								+		'<input class="hidden" type="text" name="_csrf" value="' + AKMD.CSRF + '">'
								+	'</div>'
							
						$.each(res[0],function(k, v) {
							switch(k){
								case "__v":
									break;
								case "_csrf":
									break;
								case "_id":
										form = form 	+ '<div class="form-group">'
											+		'<label for="' + k + '">' + k + '</label>'
											+		'<input class="form-control" type="text" name="' + k + '" value="' + v + '" readonly/>'
											+ '</div>'									
									break;
								case "createdAt":
										form = form 	+ '<div class="form-group">'
											+		'<label for="' + k + '">' + k + '</label>'
											+		'<input class="form-control" type="text" name="' + k + '" value="' + v + '" readonly/>'
											+ '</div>'									
									break;
								case "updatedAt":
										form = form 	+ '<div class="form-group">'
											+		'<label for="' + k + '">' + k + '</label>'
											+		'<input class="form-control" type="text" name="' + k + '" value="' + v + '" readonly/>'
											+ '</div>'									
									break;	
								default:
									form = form 	+ '<div class="form-group">'
										+		'<label for="' + k + '">' + k + '</label>'
										+		'<input class="form-control" type="text" name="' + k + '" value="' + v + '"/>'
										+ '</div>'
									break;
							}
						});
					
						form = form + '</form>'
					
					}
					
					$('#myModal .modal-body').html( form );						

					AKMD.modal({
						title	: options.title,
						cancel	: function(){
						},
						save	: function(){

							$.ajax({
								url                 : options.url,
								type                : 'put',
								dataType            : 'json',
								data				: $('#collectionForm').serialize(),
								beforeSend          : function(){
				
								},
								success             : function (res) {
									console.log('SUCCESS');
								},
								error	:  function(XMLHttpRequest, textStatus, errorThrown) { 
									console.log('ERROR: ' + errorThrown);
								}
							});
						}
					});
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) { 
					// TODO
				}
			
			})			
		},
		
		alert : function( options ){
		
				// Example Usage: AKMD.alert({type : 'success', message : 'Agent Added.'});
				
				// DEFAULTS
				var type = 'alert-info';
				var message = "No message configured."

				if(options.message){
					message = options.message
				}
								
				if(options.type){
					switch(options.type){
						case "success":
							type = "alert-success"
							message = '<strong>' + 'Success! ' + '</strong>' + message;
							break;
						case "info":
							type = "alert-info"
							message = '<strong>' + 'Info: ' + '</strong>' + message;
							break;
						case "warning":
							type = "alert-warning"
							message = '<strong>' + 'Warning! ' + '</strong>' + message;
							break;
						case "danger":
							type = "alert-danger"
							message = '<strong>' + 'Danger! ' + '</strong>' + message;
							break;
						default:
							break;
					}	
				}

				var alertHTML = 	'<div class="alert ' + type + ' alert-dismissible" role="alert">'
								+ 	'	<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
								+	'		<span aria-hidden="true">&times;</span>'
								+	'	</button>'
								+		message
								+	'</div>'
				
				$( '#ALERTS' ).html(alertHTML);
				
				var top = document.getElementById('ALERTS').offsetTop; //Getting Y of target element
				window.scrollTo(0, top); 
						
		},
		
		params : function(name) {
			name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search);
			return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		}
	}
	
	$( document ).ready(function(){
		if(AKMD.params('success')){
			AKMD.alert({type : 'success', message : 'Added ' + AKMD.params('id')});
			$('#' + AKMD.params('id')).addClass('highlight');  
		}
	});
		
	return window.AKMD = AKMD;
})(window);


(function($){
    $.fn.serializeObject = function(){

        var self = this,
            json = {},
            push_counters = {},
            patterns = {
                "validate": /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
                "key":      /[a-zA-Z0-9_]+|(?=\[\])/g,
                "push":     /^$/,
                "fixed":    /^\d+$/,
                "named":    /^[a-zA-Z0-9_]+$/
            };


        this.build = function(base, key, value){
            base[key] = value;
            return base;
        };

        this.push_counter = function(key){
            if(push_counters[key] === undefined){
                push_counters[key] = 0;
            }
            return push_counters[key]++;
        };

        $.each($(this).serializeArray(), function(){

            // skip invalid keys
            if(!patterns.validate.test(this.name)){
                return;
            }

            var k,
                keys = this.name.match(patterns.key),
                merge = this.value,
                reverse_key = this.name;

            while((k = keys.pop()) !== undefined){

                // adjust reverse_key
                reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), '');

                // push
                if(k.match(patterns.push)){
                    merge = self.build([], self.push_counter(reverse_key), merge);
                }

                // fixed
                else if(k.match(patterns.fixed)){
                    merge = self.build([], k, merge);
                }

                // named
                else if(k.match(patterns.named)){
                    merge = self.build({}, k, merge);
                }
            }

            json = $.extend(true, json, merge);
        });

        return json;
    };
})(jQuery);