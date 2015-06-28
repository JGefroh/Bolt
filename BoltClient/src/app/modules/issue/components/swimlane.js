(function() {
    function Directive() {
        function Controller($scope, SwimlaneService) {
            function initialize() {
                $scope.settings = SwimlaneService.getSettings();
            }

            $scope.nextStatType = SwimlaneService.nextStatType;

            $scope.calculateTotalEstimatedTime = function(issues) {
                return sum(issues, 'estimatedTimeInMs');
            };

            $scope.calculateTotalStoryPoints = function(issues) {
                return sum(issues, 'storyPoints');
            };

            function sum(collection, property) {
                var total = 0;
                angular.forEach(collection, function(item) {
                    var value = item[property];
                    if (value && angular.isNumber(value)) {
                        total += value;
                    }
                });
                return total;
            }
            initialize();
        }

        return {
            restrict: 'A',
            templateUrl: 'swimlane.html',
            controller: ['$scope', 'SwimlaneService', Controller],
            replace: true,
            scope: {
                title: '@',
                description: '@',
                issues: '=',
                status: '@'
            }
        }
    }
    angular
        .module('Bolt.Issues')
        .directive('swimlane', [Directive]);
})();