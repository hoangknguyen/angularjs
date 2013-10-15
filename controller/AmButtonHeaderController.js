angular.module('angularjs').controller('AmButtonHeaderCtrl', function ($scope, $amAuthService) {
    $scope.data = {
        selectedItem: '1',
        selects: [
            {id: '1', name: 'Audit Manager'},
            {id: '2', name: 'DataLoader'}
        ],
        username: $amAuthService.getCurrentUser()
    };

    // watch changes of select component.
    $scope.$watch("data.selectedItem", function (newVal, oldVal) {
    });
});