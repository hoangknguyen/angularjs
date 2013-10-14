angular.module('angularjs').factory('$amAuthService', function () {
    var authService = {};

    authService.getCurrentUser = function () {
        return 'auditqc';
    };

    return authService;
});