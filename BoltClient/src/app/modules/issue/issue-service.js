(function() {
    function Service($http, $interval) {
        var self = this;
        var UPDATE_INTERVAL_IN_MS = 15000;
        function initialize() {
            self.data = {
                issues: [],
                usedAssignees: []
            };
            self.getIssues();
            $interval(function() {
                self.getIssues();
            }, UPDATE_INTERVAL_IN_MS);
        }

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
            },
            getIssueTypes: function() {
                return './rest/data/issue-types';
            },
            getStatuses: function() {
                return './rest/data/statuses';
            }
        };

        // DATA //
        self.getIssueTypes = function() {
            return $http.get(endpoints.getIssueTypes(), {cache: true}).then(function(response) {
                return response.data;
            });
        };

        self.getStatuses = function() {
            return $http.get(endpoints.getStatuses(), {cache: true}).then(function(response) {
                return response.data;
            });
        };

        // CRUD //
        self.saveIssue = function(issue) {
            var isNew = !issue.id;
            return $http.post(endpoints.saveIssue(), issue).then(function(response) {
                if (isNew) {
                    self.data.issues.push(response.data);
                }
                else {
                    var match = null;
                    angular.forEach(self.data.issues, function(existingIssue) {
                        if (issue.id === existingIssue.id) {
                            match = existingIssue;
                        }
                    });
                    angular.copy(response.data, match);
                }

                updateUsedAssignees(self.data.issues);
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
                self.data.issues = response.data;
                updateUsedAssignees(self.data.issues);
                return self.data.issues;
            });
        };

        self.deleteIssue = function(issue) {
            return $http.delete(endpoints.deleteIssue(issue.id), {params:{projectUUID: issue.projectUUID}}).then(function(response) {
                var issueIndex =self.data.issues.indexOf(issue);
                if (issueIndex !== -1) {
                    self.data.issues.splice(issueIndex, 1);
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
            angular.forEach(self.data.issues, function(existingIssue) {
                if (issue.id === existingIssue.id) {
                    match = existingIssue;
                }
            });
            angular.copy(issue, match);
        }

        function updateUsedAssignees(issues) {
            self.data.usedAssignees.length = 0;
            angular.forEach(issues, function(issue) {
                if (issue.assignee && self.data.usedAssignees.indexOf(issue.assignee) === -1) {
                    self.data.usedAssignees.push(issue.assignee);
                }
            });
        }

        initialize();
    }
    angular
        .module('Bolt.Issues')
        .service('IssueService', ['$http', '$interval', Service]);
})();