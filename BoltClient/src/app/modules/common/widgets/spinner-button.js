(function() {
    function Directive($modal) {
        return {
            restrict: 'A',
            templateUrl: 'spinner-button.html',
            replace: true,
            scope: {
                loading: '=',
                label: '@',
                icon: '@'
            }
        }
    }
    angular
        .module('Bolt.Sprint')
        .directive('spinnerButton', ['$modal', Directive]);
})();