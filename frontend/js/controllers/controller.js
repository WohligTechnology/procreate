var initMap = function () {};
myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $rootScope) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.inspireImg = [{
                img: 'frontend/img/homepage/home3.jpg'
            }, {
                img: 'frontend/img/homepage/home3.jpg'
            },
            {
                img: 'frontend/img/homepage/home3.jpg'
            },
            {
                img: 'frontend/img/homepage/home3.jpg'
            },
            {
                img: 'frontend/img/homepage/home3.jpg'
            },
            {
                img: 'frontend/img/homepage/home3.jpg',
                titlehome2: 'THE TWO-DOLLAR BILL',
                title2: 'BY CHRISTIAN GREWE'
            }
        ]

        $scope.homeImg = [{
                img: 'frontend/img/homepage/32.png'
            },
            {
                img: 'frontend/img/homepage/42.png'
            },
            {
                img: 'frontend/img/homepage/61.png'
            },
            {
                img: 'frontend/img/homepage/82.png'
            },
            {
                img: 'frontend/img/homepage/10.png'
            },
            {
                img: 'frontend/img/homepage/122.png'

            },
            {
                img: 'frontend/img/homepage/43.png'

            },
            {
                img: 'frontend/img/homepage/52.png'

            },
            {
                img: 'frontend/img/homepage/73.png'

            },
            {
                img: 'frontend/img/homepage/92.png'

            },
            {
                img: 'frontend/img/homepage/111.png'

            },
            {
                img: 'frontend/img/homepage/31.png'

            },
            {
                img: 'frontend/img/homepage/32.png'

            },
            {
                img: 'frontend/img/homepage/42.png'

            },
            {
                img: 'frontend/img/homepage/61.png'

            },
            {
                img: 'frontend/img/homepage/82.png'

            },
            {
                img: 'frontend/img/homepage/10.png'

            },
            {
                img: 'frontend/img/homepage/122.png'

            },
            {
                img: 'frontend/img/homepage/43.png'

            },
            {
                img: 'frontend/img/homepage/52.png'

            },
            {
                img: 'frontend/img/homepage/73.png'

            },
            {
                img: 'frontend/img/homepage/92.png'

            },
            {
                img: 'frontend/img/homepage/111.png'

            },
            {
                img: 'frontend/img/homepage/31.png'

            },
        ]



        $scope.homeImg = _.chunk($scope.homeImg, 12);
        for (var i = 0; i < $scope.homeImg.length; i++) {
            $scope.homeImg[i] = _.chunk($scope.homeImg[i], 6);
            console.log($scope.homeImg);
        }
        console.log("this is client");
        console.log($scope.homeImg);



        $scope.homeText = [{
                title1: 'PARLE, SR. PRODUCT MANAGER ',
                title2: '“The feedback from the market as well as our field force has been quite encouraging.I must take this opportunity to mention that Procreate is a fast emerging design specialist firm with the most important trait of not just creativity, but has a lot of willingness to explore and walk that extra mile to deliver to the client’s satisfaction.I wish Akhilesh and team Procreate all the very best.”  '
            },
            {
                title1: 'PARLE, SR. PRODUCT MANAGER',
                title2: '“The feedback from the market as well as our field force has been quite encouraging.I must take this opportunity to mention that Procreate is a fast emerging design specialist firm with the most important trait of not just creativity, but has a lot of willingness to explore and walk that extra mile to deliver to the client’s satisfaction.I wish Akhilesh and team Procreate all the very best.”',

            },

        ]


        var abc = _.times(100, function (n) {
            return n;
        });

        var i = 0;
        $scope.buttonClick = function () {
            i++;
            console.log("This is a button Click");
        };

        initMap = function () {
            var uluru = {
                lat: 19.166411,
                lng: 72.847466
            };
            // Styles a map in night mode.
            var map = new google.maps.Map(document.getElementById('map'), {
                center: uluru,
                scrollwheel: false,
                zoom: 15,
            });

            var marker = new google.maps.Marker({
                position: uluru,
                title: "Procreate",
                // icon: "http://gsourcedata.com/img/landing-logo.png/",
                map: map

            });
        }
        $timeout(function () {
            initMap();
        }, 500);

    })

    .controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/form.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
        $scope.submitForm = function (data) {
            console.log(data);
            $scope.formSubmitted = true;
        };
    })

    .controller('AboutCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/about.html");
        TemplateService.title = "About"; //This is the Title of the Website
        // TemplateService.header = "views/template/header1.html"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })

    .controller('OfferingCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/offering.html");
        TemplateService.title = "Offering"; //This is the Title of the Website
        // TemplateService.header = "views/template/header2.html";
        $scope.navigation = NavigationService.getNavigation();
    })


    //Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });