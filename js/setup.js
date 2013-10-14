angular.module('angularjs', ['ui.bootstrap', 'ui']);

angular.module('angularjs').config(function ($routeProvider) {

    $routeProvider.
        /* Add New Routes Above */
        otherwise({redirectTo: '/home'});

});

angular.module('angularjs').run(function ($rootScope) {

    $rootScope.safeApply = function (fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
