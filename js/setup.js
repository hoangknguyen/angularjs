angular.module('angularjs', ['ui.bootstrap', 'ui']);

angular.module('angularjs').config(function ($routeProvider) {

    $routeProvider.
        when('/demographics', {templateUrl: 'partial/demographics/demographics.html'}).
        when('/home', {templateUrl: 'partial/home/home.html'}).
        /* Add New Routes Above */
        otherwise({redirectTo: '/demographics'});

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
