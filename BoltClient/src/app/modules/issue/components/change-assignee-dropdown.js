(function() {
    function Directive() {
        function Controller($scope, IssueService) {
            function initialize() {
                $scope.assignees = IssueService.data.usedAssignees;
            }

            $scope.changeAssigneeTo = function(issue, assignee) {
                var oldAssignee = issue.assignee;
                issue.assignee = assignee;
                IssueService.saveIssue(issue).then(function(savedIssue) {
                    angular.copy(savedIssue, issue);
                }).catch(function() {
                    issue.assignee = oldAssignee;
                });
            };

            initialize();
        }
        return {
            restrict: 'A',
            replace: true,
            scope: {
                issue: '='
            },
            templateUrl: 'change-assignee-dropdown.html',
            controller: ['$scope', 'IssueService', Controller]
        }
    }
    angular
        .module('Bolt.Issues')
        .directive('changeAssigneeDropdown', [Directive]);
})();