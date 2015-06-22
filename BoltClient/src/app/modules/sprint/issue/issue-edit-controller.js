(function() {
    function Controller($scope, $modalInstance,
                        IssueService,
                        data) {
        function initialize() {
            $scope.operations = {
                saveIssue: {}
            };

            $scope.statuses = [
                'HOLD',
                'BACKLOG',
                'DEVELOPMENT',
                'STAGING',
                'TESTING',
                'DONE'
            ];

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
        .module('Bolt.Sprint')
        .controller('IssueEditController', ['$scope', '$modalInstance',
                                            'IssueService',
                                            'data',
                                            Controller]);
})();