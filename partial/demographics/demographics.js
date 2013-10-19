angular.module('angularjs').controller('DemographicsCtrl', function ($scope, $profileService) {
    // return a promise instead of the real object.
    $scope.loadProfile = function() {
        console.log('Profile loading...')
        $scope.profile = $profileService.fetchProfile();
    }
});