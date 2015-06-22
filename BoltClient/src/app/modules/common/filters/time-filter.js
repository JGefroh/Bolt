(function() {
    function Filter() {
        function getHours(timeInMs) {
            var hours = parseInt((timeInMs / (3600000)));
            return hours < 10 ? '0' + hours : hours;
        }

        function getMinutes(timeInMs) {
            var minutes = parseInt((timeInMs / (60000)) % 60);
            return minutes < 10 ? '0' + minutes : minutes;
        }

        function getSeconds(timeInMs) {
            var seconds = parseInt((timeInMs / (1000)) % 60);
            return seconds < 10 ? '0' + seconds : seconds;
        }

        function getMilliseconds(timeInMs) {
            var milliseconds = parseInt(timeInMs % 1000);
            if (milliseconds < 10) {
                return '00' + milliseconds;
            }
            else if (milliseconds < 100) {
                return '0' + milliseconds;
            }
            else {
                return milliseconds;
            }
        }

        return function(timeInMs, format) {
            var time = format;
            time = time.replace('hh', getHours(timeInMs));
            time = time.replace('mm', getMinutes(timeInMs));
            time = time.replace('ss', getSeconds(timeInMs));
            time = time.replace('ms', getMilliseconds(timeInMs));

            return time;
        };
    }
    angular
        .module('jgefroh.filters')
        .filter('time', Filter);
})();