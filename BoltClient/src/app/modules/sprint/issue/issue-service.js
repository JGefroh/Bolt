(function() {
    function Service($http) {
        var self = this;
        self.state = {
            issues: []
        };

        var endpoints = {
            getIssues: function() {
                return './rest/issues/';
            },
            getIssue: function(id) {
                return './rest/issues/:id'.replace(':id', Number(id));
            },
            deleteIssue: function(id) {
                return './rest/issues/:id'.replace(':id', Number(id));
            },
            saveIssue: function() {
                return './rest/issues/'
            },
            nextStatus: function(id) {
                return './rest/issues/:id/status/next'.replace(':id', Number(id));
            },
            previousStatus: function(id) {
                return './rest/issues/:id/status/previous'.replace(':id', Number(id));
            }
        };

        // CRUD //
        self.saveIssue = function(issue) {
            var isNew = !issue.id;
            return $http.post(endpoints.saveIssue(), issue).then(function(response) {
                if (isNew) {
                    self.state.issues.push(response.data);
                }
                else {
                    var match = null;
                    angular.forEach(self.state.issues, function(existingIssue) {
                        if (issue.id === existingIssue.id) {
                            match = existingIssue;
                        }
                    });
                    angular.copy(response.data, match);
                }
                return response.data;
            });
        };

        self.getIssue = function(id) {
            return $http.get(endpoints.getIssue(id)).then(function(response) {
                return response.data;
            });
        };

        self.getIssues = function(projectUUID) {
            return $http.get(endpoints.getIssues(), {params:{projectUUID: projectUUID}}).then(function(response) {
                self.state.issues = response.data;
                return self.state.issues;
            });
        };

        self.deleteIssue = function(issue) {
            return $http.delete(endpoints.deleteIssue(issue.id), {params:{projectUUID: issue.projectUUID}}).then(function(response) {
                var issueIndex =self.state.issues.indexOf(issue);
                if (issueIndex !== -1) {
                    self.state.issues.splice(issueIndex, 1);
                }

                return response.data;
            });
        };


        // Ops //
        self.nextStatus = function(issue) {
            return $http.post(endpoints.nextStatus(issue.id)).then(function(response) {
                findAndUpdate(response.data);
                return response.data;
            });
        };

        self.previousStatus = function(issue) {
            return $http.post(endpoints.previousStatus(issue.id)).then(function(response) {
                findAndUpdate(response.data);
                return response.data;
            });
        };

        function findAndUpdate(issue) {
            var match = null;
            angular.forEach(self.state.issues, function(existingIssue) {
                if (issue.id === existingIssue.id) {
                    match = existingIssue;
                }
            });
            angular.copy(issue, match);
        }
    }
    angular
        .module('Bolt.Sprint')
        .service('IssueService', ['$http', Service]);
})();