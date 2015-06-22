(function() {
    function Filter() {
        function getHours(timeInMs) {
            var hours = parseInt((timeInMs / (3600000)));
            return hours;
        }

        function getMinutes(timeInMs) {
            var minutes = parseInt((timeInMs / (60000)) % 60);
            return minutes;
        }

        function getSeconds(timeInMs) {
            var seconds = parseInt((timeInMs / (1000)) % 60);
            return seconds;
        }

        function getMilliseconds(timeInMs) {
            var milliseconds = parseInt(timeInMs % 1000);
            return milliseconds;
        }

        return function(timeInMs, format, abbreviate) {
            var hours = getHours(timeInMs);
            var minutes = getMinutes(timeInMs);
            var seconds = getSeconds(timeInMs);
            var milliseconds = getMilliseconds(timeInMs);

            var total = '';
            if (format.indexOf('hh') !== -1) {
                total += hours + (abbreviate ? 'h' : ' hours');
            }

            if (format.indexOf('mm') !== -1) {
                total += ' ' + minutes + (abbreviate ? 'm' : ' minutes');
            }
            return total;
        };
    }
    angular
        .module('jgefroh.filters')
        .filter('duration', Filter);
})();