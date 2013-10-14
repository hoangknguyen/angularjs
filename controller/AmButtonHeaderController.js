angular.module('angularjs').controller('AmButtonHeaderCtrl', function ($scope, $amAuthService) {
    $scope.selectedItem = '1';
    $scope.selects = [
        {id: '1', name: 'Audit Manager'}
    ];
    $scope.username = $amAuthService.getCurrentUser();
});