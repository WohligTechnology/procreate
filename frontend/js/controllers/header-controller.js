myApp.controller('headerCtrl', function ($scope, TemplateService, $rootScope,$location,$anchorScroll) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
      $scope.gotoBottom = function() {
 $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    };
    
        $scope.gotoTop = function() {
 $("html, body").animate({ scrollTop: 0 }, 1000);
    };
    
});