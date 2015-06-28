(function() {
    function Controller($scope, $modalInstance,
                        IssueService,
                        data) {
        function initialize() {
            $scope.operations = {
                saveIssue: {}
            };

            IssueService.getStatuses().then(function(statuses) {
                $scope.statuses = statuses;
            });
            IssueService.getIssueTypes().then(function(issueTypes) {
                $scope.issueTypes = issueTypes;
            });

            if (data) {
                if (data.issue) {
                    $scope.issue = angular.copy(data.issue);
                }
                else {
                    $scope.isNew = true;
                }
            }
        }

        $scope.save = function(issue) {
            $scope.operations.saveIssue.status = 'LOADING';
            IssueService.saveIssue(issue).then(function(savedIssue) {
               $modalInstance.close(savedIssue);
            }).finally(function() {
                $scope.operations.saveIssue.status = null;
            });
        };

        $scope.cancel = function() {
            $modalInstance.cancel();
        };

        initialize();
    }
    angular
        .module('Bolt.Issues')
        .controller('IssueEditController', ['$scope', '$modalInstance',
                                            'IssueService',
                                            'data',
                                            Controller]);
})();