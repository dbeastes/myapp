'use strict';

/**
 * Config constant
 */
app.constant('APP_MEDIAQUERY', {
    'desktopXL': 1200,
    'desktop': 992,
    'tablet': 768,
    'mobile': 480
});
app.constant('JS_REQUIRES', {
    //*** Scripts
    scripts: {
    
    	//*** Controllers 
			'programconnectsController'			: '/javascripts/controllers/programconnectsController.js',
			'agenciesController'				: '/javascripts/controllers/agenciesController.js',
			'agencyController'					: '/javascripts/controllers/agencyController.js',
			'agentsController'					: '/javascripts/controllers/agentsController.js',
			'agentController'					: '/javascripts/controllers/agentController.js',
			
    },
    //*** angularJS Modules
    modules: [
    	{
			name: 'ui-bootstrap',
			files: ['/vendor/angular-ui-bootstrap/ui-bootstrap-0.14.3.js']
		}
    ]
});
