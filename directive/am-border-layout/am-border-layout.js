angular.module('angularjs').directive('amBorderLayout', function () {
    return {
        restrict: 'E',
        templateUrl: 'directive/am-border-layout/am-border-layout.html',
        replace: true,
        transclude: true,
        scope: {},
        controller: function ($scope, $element, $transclude) {
            $transclude(function (clone) {
                var leftBlock = $element.find('.left-block');
                var rightBlock = $element.find('.right-block');

                angular.forEach(clone, function (e) {
                    if (angular.element(e).hasClass('left-grp')) {
                        leftBlock.append(e);
                    } else if (angular.element(e).hasClass('right-grp')) {
                        rightBlock.append(e);
                    }
                });
            });
        }
    };
});
