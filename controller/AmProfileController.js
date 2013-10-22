angular.module('angularjs').controller('AmProfileController', function ($scope, $profileService) {
    var ctrl = this;
    ctrl.$scope = $scope;
    // return a promise instead of the real object.
    $scope.loadProfile = function () {
        $profileService.fetchProfile().then(function (response) {
            if (!$scope.profile) {
                console.log('Profile loading...')
                $scope.profile = response.data;
            }
        }, function (error) {
            alert('Got error message');
        });
    }
});