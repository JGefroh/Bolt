(function() {
    function Routes($stateProvider) {
        $stateProvider
            .state('issue-swimlanes', {
                url: '/swimlanes',
                templateUrl: 'views/swimlane/issue-swimlanes.html',
                controller: 'IssueSwimlanesController'
            })
            .state('issue-list', {
                url: '/issues',
                templateUrl: 'views/list/issue-list.html',
                controller: 'IssueListController'
            });
    }
    angular
        .module('Bolt.Issues', [])
        .config(['$stateProvider', Routes]);
})();
