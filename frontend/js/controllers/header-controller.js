myApp.controller('headerCtrl', function ($scope, TemplateService, $rootScope) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
        $scope.changeURL = function (id) {
      console.log(id);
      $location.path("" + id);
    };
});