(function() {
    function Routes($stateProvider) {
        $stateProvider
            .state('sprint-overview', {
                url: '/overview',
                templateUrl: 'sprint-overview.html',
                controller: 'SprintOverviewController'
            })
            .state('sprint', {
                url: '',
                templateUrl: 'sprint.html',
                controller: 'SprintController'
            });
    }
    angular
        .module('Bolt.Sprint', [])
        .config(['$stateProvider', Routes]);
})();
