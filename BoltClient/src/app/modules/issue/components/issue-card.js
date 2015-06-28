(function() {
    function Directive() {
        function Controller($scope, IssueService) {
            $scope.deleteIssue = function(issue) {
                IssueService.deleteIssue(issue);
            };

            $scope.nextStatus = function(issue) {
                IssueService.nextStatus(issue);
            };

            $scope.previousStatus = function(issue) {
                IssueService.previousStatus(issue);
            };
        }

        return {
            restrict: 'A',
            templateUrl: 'issue-card.html',
            controller: ['$scope', 'IssueService', Controller],
            replace: true,
            scope: {
                issue: '='
            }
        }
    }
    angular
        .module('Bolt.Issues')
        .directive('issueCard', Directive);
})();