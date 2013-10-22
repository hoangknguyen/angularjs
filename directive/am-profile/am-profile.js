angular.module('angularjs').directive('amProfile',function ($compile, $http, $q) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            profile: '=profileData' // get the profile from profile-data property.
        },
        templateUrl: 'directive/am-profile/am-profile.html',
        compile: function () {
            return {
                pre: function ($scope, iElement, iAttrs) {
                    // init AmProfileRow
                    var amProfileRow = new AmProfileRow({},$scope, $http, $q);

                    $scope.$watch('profile', function (val) {
                        if (val) {
                            amProfileRow.buildRows(val);
                        }
                    });
                    var html = $compile(amProfileRow.config.template)($scope);

                    iElement.append(html);
                },
                post: function($scope, iElement, iAttrs) {
                }
            };
        }
    };
}).directive('amProfileRow', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'directive/am-profile/am-profile-row.html'
        };
    });