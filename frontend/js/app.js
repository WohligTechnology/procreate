// Link all the JS Docs here
var myApp = angular.module('myApplication', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    // 'ngAnimate',
    // 'ngSanitize',
    'angular-flexslider',
    'ui.swiper',
    'duScroll'
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL

    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: tempateURL,
            controller: 'FormCtrl'
        })

        .state('about', {
            url: "/about",
            templateUrl: tempateURL,
            controller: 'AboutCtrl'
        })

        // .state('offering', {
        //     url: "/offering",
        //     templateUrl: tempateURL,
        //     controller: 'OfferingCtrl'
        // })

        // .state('offeringid', {
        //     url: "/offering/:id",
        //      templateUrl: tempateURL,
        //     controller: 'OfferingCtrl'
        // })

        // .state('approach', {
        //     url: "/approach",
        //     templateUrl: tempateURL,
        //     controller: 'ApproachCtrl'
        // })


        .state('portfolio', {
            url: "/portfolio",
            templateUrl: tempateURL,
            controller: 'PortfolioCtrl'
        })

        .state('good', {
            url: "/good",
            templateUrl: tempateURL,
            controller: 'GoodCtrl'
        })

        .state('arch', {
            url: "/arch",
            templateUrl: tempateURL,
            controller: 'ArchCtrl'
        })
        .state('doycare', {
            url: "/doycare",
            templateUrl: tempateURL,
            controller: 'DoycareCtrl'
        })

    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});



// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});

myApp.directive('fancyboxBox', function ($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function (scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
                target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                helpers: {
                    media: {}
                }
            });
        }
    };
});
