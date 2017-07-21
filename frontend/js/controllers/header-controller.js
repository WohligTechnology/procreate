myApp.controller('headerCtrl', function ($scope, TemplateService, $rootScope, $location, $anchorScroll) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    // $.fancybox.close(true);
    $scope.gotoBottom = function () {
        $("html, body").animate({
             scrollTop: $(".contact-set").offset().top - 80
        }, 1000);
    };
});