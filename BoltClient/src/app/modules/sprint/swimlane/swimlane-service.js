(function() {
    function Service() {
        var self = this;
        self.settings = {
            statType: 'SP'
        };

        self.getSettings = function() {
            return self.settings;
        };

        self.nextStatType = function() {
            if (self.settings.statType === 'SP') {
                self.settings.statType = 'TIME';
            }
            else if (self.settings.statType === 'TIME') {
                self.settings.statType = 'ISSUES';
            }
            else {
                self.settings.statType = 'SP';
            }
        };

        self.getStatType = function() {
            return self.settings.statType;
        }
    }
    angular
        .module('Bolt.Sprint')
        .service('SwimlaneService', [Service]);
})();