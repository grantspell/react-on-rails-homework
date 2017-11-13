(function () {
    angular.module('Rails5')
        .controller('rails5Controller', rails5Controller);


    function rails5Controller($http) {

        var self = this;
        var server = "https://calm-harbor-22944.herokuapp.com/api/"
        // For example, var server = 'https://enigmatic-garden-65625.herokuapp.com/api/'

        self.doctors = [];
        self.patients = [];
        self.appointments = [];

        $http.get(`${server}doctors`)
            .then(function (response) {
                return self.doctors = response.data;
                console.log(self.doctors[0].name);
            });

        $http.get(`${server}patients`)
            .then(function (response) {
                return self.patients = response.data;
                console.log(self.patients[0].name);
            });

        $http.get(`${server}appointments`)
            .then(function (response) {
                return self.appointments = response.data;
                console.log(self.appointments[0].name);
            });

    }
})()