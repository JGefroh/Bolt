(function() {
    function Filter() {
        return function convertToMsFromEnglish(input) {
            var matches = input.match(/[0-9]+[a-z]/ig);
            var time = 0;
            angular.forEach(matches, function(match) {
                if (match.indexOf('h') !== -1) {
                    time += Number(match.slice(0, -1)) * 3600000;
                }
                else if (match.indexOf('m') !== -1) {
                    time += Number(match.slice(0, -1)) * 60000;
                }
                else if (match.indexOf('s' !== -1)) {
                    time += Number(match.slice(0, -1) * 1000);
                }
            });
            return time;
        }
    }
    angular
        .module('jgefroh.filters')
        .filter('englishToMs', Filter);
})();