(function() {
    function Directive($modal) {
        return {
            restrict: 'A',
            scope: {
                issue: '='
            },
            link: function(scope, element, attributes) {
                var modal = null;
                element.on('click', function() {
                    if (modal) {
                        return;
                    }
                    modal = $modal.open({
                        controller: 'IssueEditController',
                        templateUrl: 'issue-edit.html',
                        size: 'md',
                        resolve: {
                            data: function() {
                                return {
                                    issue: scope.issue
                                };
                            }
                        }
                    });
                    modal.result.then(function(issue) {
                    }).finally(function() {
                        modal = null;
                    });
                });
            }
        }
    }
    angular
        .module('Bolt.Sprint')
        .directive('editIssue', ['$modal', Directive]);
})();