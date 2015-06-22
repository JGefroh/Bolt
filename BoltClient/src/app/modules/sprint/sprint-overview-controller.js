(function() {
    function Controller($scope,
                        IssueService) {
        function initialize() {
            $scope.sprints = [
                {
                    id: 1,
                    name: 'The Great Reckoning',
                    startDate: '01/24/1991',
                    endDate: '01/25/1991',
                    issueCount: 93,
                    doneCount: 52,
                    storyPointsCompleted: 59,
                    storyPointsEstimated: 91,
                    hoursCompleted: 923,
                    hoursEstimated: 1444,
                    active: false
                },
                {
                    id: 1,
                    name: 'Joseph\'s Project Hell',
                    startDate: '01/24/1991',
                    endDate: '01/25/1991',
                    issueCount: 93,
                    doneCount: 52,
                    storyPointsCompleted: 59,
                    storyPointsEstimated: 91,
                    hoursCompleted: 923,
                    hoursEstimated: 1444,
                    active: true
                }
            ];

            $scope.activeSprint = $scope.sprints [1];
        }

        initialize();
    }
    angular
        .module('Bolt.Sprint')
        .controller('SprintOverviewController', ['$scope',
                                                 'IssueService',
                                                 Controller]);
})();