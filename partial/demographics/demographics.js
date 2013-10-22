angular.module('angularjs').controller('DemographicsCtrl', function ($scope, $profileService) {
    $scope.loadProfile = function () {
        $profileService.fetchProfile().then(function (response) {
            //if (!$scope.profile) {
            console.log('Profile loading...');
            $scope.profile = response.data;
            //}
        }, function (error) {
        });
    };
});