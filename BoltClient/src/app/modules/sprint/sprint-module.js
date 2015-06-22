(function() {
    function Routes($stateProvider) {
        $stateProvider
            .state('sprint-overview', {
                url: '/overview',
                templateUrl: 'sprint-overview.html',
                controller: 'SprintOverviewController'
            })
            .state('sprint', {
                url: '/sprint',
                templateUrl: 'sprint.html',
                controller: 'SprintController'
            })
            .state('issue-list', {
                url: '/issues',
                templateUrl: 'issue-list.html',
                controller: 'IssueListController'
            });
    }
    angular
        .module('Bolt.Sprint', [])
        .config(['$stateProvider', Routes]);
})();
