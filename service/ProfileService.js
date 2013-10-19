angular.module('angularjs').factory('$profileService', function ($q, $http) {
    var profileService = {
        currentProfile: null // hold the current profile.
    };

    profileService.fetchProfile = function () {
        var deferred = $q.defer();
        $http.get('resources/profile.json').success(function(data, status, headers, config) {
            deferred.resolve(data);
        }).error(function(data, status, headers, confi){
                deferred.reject('Could not get profile.');
            });

        profileService.currentProfile = deferred.promise;
        return profileService.currentProfile;
    };

    profileService.getCurrentProfile = function() {
        return profileService.currentProfile;
    }

    return profileService;
});