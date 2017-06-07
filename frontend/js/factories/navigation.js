myApp.factory('NavigationService', function ($http) {
    var navigation = [{
            name: "ABOUT US",
            classis: "active",
            anchor: "about",
            subnav: []
        }, {
            name: "WORK",
            classis: "active",
            anchor: "portfolio",
            subnav: []
        },
        //  {
        //     name: "APPROACH",
        //     classis: "active",
        //     anchor: "approach",
        //     subnav: []
        // }, 
        // {
        //     name: "OFFERING",
        //     classis: "active",
        //     anchor: "offering",
        //     subnav: []
        // },
         {
            name: "CONTACT",
            classis: "active",
            id: "contact",
            subnav: []
        }

    ];

    return {
        getNavigation: function () {
            return navigation;
        },
        apiCallWithData: function (url, formData, callback) {
            console.log("inside nav");
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data);

            });
        },
        recaptcha: function (url, formdata, callback) {
            console.log("captcha");
            $http.post(url, formdata).then(function (data) {
                data = data.data;
                callback(data);

            });
        },
    };
});