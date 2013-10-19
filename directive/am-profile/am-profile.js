angular.module('angularjs').directive('amProfile',function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            profile: '=profileData' // get the profile from profile-data property.
        },
        controller: function ($scope, $element, $attrs) {
            var _this = this;
            // save the profile data to the controller to share it between components.
            _this.profile = $scope.profile;
        },
        templateUrl: 'directive/am-profile/am-profile.html',
        link: function (scope, element, attrs, fn) {
            console.log(scope);
        }
    };
}).directive('amProfileRow', function () {
        return {
            restrict: 'E',
            require: '^?amProfile',
            scope: {
                colTitle: '@columnTitle',
                profile: '=profileData'
            },
            transclude: true,
            replace: true,
            templateUrl: 'directive/am-profile/am-profile-row.html',
            compile: function (tElement, tAttrs, transclude) {
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {
                    },
                    post: function postLink(scope, iElement, iAttrs, controller) {
                    }
                }
            }
        }
    });
