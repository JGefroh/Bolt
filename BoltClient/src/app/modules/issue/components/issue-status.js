(function() {
    function Directive() {
        function Controller($scope, IssueService) {
        }

        return {
            restrict: 'A',
            templateUrl: 'issue-status.html',
            controller: ['$scope', 'IssueService', Controller],
            replace: true,
            scope: {
                status: '=',
                selected: '='
            }
        }
    }
    angular
        .module('Bolt.Issues')
        .directive('issueStatus', Directive);
})();