angular.module('angularjs').directive('amPanel', function() {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
        scope: {
            title: '@panelTitle'
        },
        template: ['<div class="am-panel-container">',
            '<div class="am-panel-title">',
            '{{title}}',
            '</div>',
            '<div class="am-panel-content" ng-transclude>',
            '</div>',
            '</div>'].join(''),
		link: function(scope, element, attrs, fn) {
		}
	};
});
