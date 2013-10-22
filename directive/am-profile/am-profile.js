angular.module('angularjs').directive('amProfile',function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                profile: '=profileData' // get the profile from profile-data property.
            },
            controller: 'AmProfileController',
            templateUrl: 'directive/am-profile/am-profile.html',
            link: function ($scope, iElement, iAttrs, controller) {
            }
        };
    }).directive('amProfileRow', function () {
        return {
            restrict: 'E',
            replace: true,
            require: '^?amProfile',
            scope: {
                colTitle: '@columnTitle',
                colValue: '@columnValue'
            },
            controller: function(){},
            templateUrl: 'directive/am-profile/am-profile-row.html',
            link: function ($scope, iElement, iAttrs, amProfileController) {
                console.log(amProfileController.$scope.profile);
                $scope.profile = amProfileController.$scope.profile;
            }
        };
    });
