angular.module('angularjs').controller('DemographicsCtrl', function ($scope, $profileService) {
    // return a promise instead of the real object.
    $scope.loadProfile = function () {
        console.log('Profile loading...')
        $profileService.fetchProfile().then(function (response) {
            $scope.profile = response.data;
        }, function (error) {
            alert('Got error message');
        });
    }
});