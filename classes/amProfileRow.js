var AmProfileRow = function(config, $scope, $http, $q) {
    var self = this;

    var $default = {
        template: '<div class="am-profile-row" ng-repeat="row in renderedRows"><div class=" {{row.even}}"><div class="profile-col profile-col1">{{row.colTitle}}</div><div class="profile-col profile-col2">{{row.colValue}}</div></div></div>'
    }

    self.config = $.extend(config, $default);
    $scope.renderedRows = [];

    self.addRow = function(rowTitle, rowValue) {
        $scope.renderedRows.push({
            colTitle: rowTitle,
            colValue: rowValue,
            even: $scope.renderedRows.length % 2 === 0 ? 'even' : 'odd'
        });
    };

    self.buildRows = function(val) {
        // clear rows
        $scope.renderedRows = [];
        for (var field in val) {
            if (field === 'id') {
                self.addRow('Request #', val[field]);
            } else if (field === 'clientId') {
                self.addRow('Client Request', val[field]);
            } else if (field === 'addresses') {
                if (val[field] instanceof Array) {
                    for (var i in val[field]) {
                        var rowData = val[field][i];
                        self.addRow('Address', rowData.street1);
                        self.addRow('', rowData.street2);
                        self.addRow('', rowData.city + ' ' + rowData.state);
                        if (rowData.phones instanceof Array) {
                            for (var j in rowData.phones) {
                                var phone = rowData.phones[j];
                                self.addRow('Phone ' + (parseInt(j) + 1), phone.ext + ' ' + phone.number);
                            }
                        }
                        if (rowData.faxes instanceof Array) {
                            for (var k in rowData.faxes) {
                                var fax = rowData.faxes[k];
                                self.addRow('Fax ' + (parseInt(k) + 1), fax.ext + ' ' + fax.number);
                            }
                        }
                    }
                }
            }
        }
    };
}