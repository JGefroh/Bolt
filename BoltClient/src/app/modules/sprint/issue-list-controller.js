(function() {
    function Controller($scope, $modal,
                        IssueService) {
        function initialize() {
            $scope.$watch('issues', function(issues) {
            }, true);

            IssueService.getIssues().then(function(issues) {
                $scope.issues = issues;
            });
            $scope.filteredStatuses = [];
        }

        $scope.deleteIssue = function(issue) {
            IssueService.deleteIssue(issue);
        };

        $scope.toggleStatus = function(status) {
            if ($scope.filteredStatuses.indexOf(status) === -1) {
                $scope.filteredStatuses.push(status);
            }
            else {
                $scope.filteredStatuses.splice($scope.filteredStatuses.indexOf(status), 1);
            }
        };

        $scope.isStatusSelected = function(status) {
            if ($scope.filteredStatuses.indexOf(status) === -1) {
                return false;
            }
            return true;
        };

        $scope.hasStatus = function(issue) {
            if ($scope.filteredStatuses.length === 0) {
                return true;
            }

            if ($scope.filteredStatuses.indexOf(issue.status) === -1) {
                return false;
            }
            return true;
        };

        initialize();
    }
    angular
        .module('Bolt.Sprint')
        .controller('IssueListController', ['$scope', '$modal',
                                            'IssueService',
                                            Controller]);
})();