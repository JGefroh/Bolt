(function() {
    function Controller($scope, $modal, $filter,
                        IssueService) {
        function initialize() {
            $scope.data = IssueService.data;
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

        $scope.changeStatusTo = function(issue, status) {
            var oldStatus = issue.status;
            issue.status = status;
            IssueService.saveIssue(issue).then(function(savedIssue) {
                angular.copy(savedIssue, issue);
            }).catch(function() {
                issue.status = oldStatus;
            });
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
        .module('Bolt.Issues')
        .controller('IssueListController', ['$scope', '$modal', '$filter',
                                            'IssueService',
                                            Controller]);
})();