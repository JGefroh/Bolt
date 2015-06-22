/**
 * Defines and configures all modules.
 */
angular
    .module('Bolt',
    [
        'ui.router',
        'ui.bootstrap',
        'jgefroh.filters',
        'Bolt.Sprint'
    ]);
angular
    .module('Bolt')
    .constant('applicationName', 'Bolt')
    .constant('versionNumber', 'v0.0.1');

angular
    .module('Bolt')
    .controller('AppController', [function() {
    }]);