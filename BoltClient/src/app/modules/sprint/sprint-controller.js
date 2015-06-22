(function() {
    function Controller($scope, $modal,
                        IssueService) {
        function initialize() {
            $scope.$watch('issues', function(issues) {
                updateSprintStats(issues);
            }, true);

            IssueService.getIssues().then(function(issues) {
                $scope.issues = issues;
            });
        }

        $scope.endSprint = function() {
        };

        function updateSprintStats(issues) {
            $scope.sprint = {
                storyPointsEstimated: 0,
                storyPointsCompleted: 0,
                storyPointsIssueCount: 0,
                issuesCompleted: 0,
                issuesCount: 0,
                estimatedTimeInMs: 0,
                estimatedTimeInMsUsed: 0,
                estimatedTimeInMsIssueCount: 0

            };
            if (issues) {
                $scope.sprint.issuesCount = issues.length;
                angular.forEach(issues, function(issue) {
                    if (issue.storyPoints) {
                        $scope.sprint.storyPointsEstimated += issue.storyPoints;
                        $scope.sprint.storyPointsIssueCount++;
                    }
                    if (issue.estimatedTimeInMs) {
                        $scope.sprint.estimatedTimeInMs += issue.estimatedTimeInMs;
                        $scope.sprint.estimatedTimeInMsIssueCount++;
                    }
                    if (issue.status === 'DONE') {
                        $scope.sprint.storyPointsCompleted += issue.storyPoints ? issue.storyPoints : 0;
                        $scope.sprint.issuesCompleted++;
                    }
                });
            }
        }

        initialize();
    }
    angular
        .module('Bolt.Sprint')
        .controller('SprintController', ['$scope', '$modal',
                                         'IssueService',
                                          Controller]);
})();