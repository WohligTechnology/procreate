myApp.controller('PortfolioCtrl', function ($scope, TemplateService, NavigationService, $timeout,$state,$location) {
    $scope.template = TemplateService.getHTML("content/portfolio.html");
    TemplateService.title = "Portfolio"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.formSubmitted = false;
    $scope.submitForm = function (data) {
        console.log(data);
        $scope.formSubmitted = true;
    };
     $scope.getTab = function (view) {
      var id = "";
      console.log(view);
      switch (view) {
        case 0:
          id = "strategy";
          break;
        case 1:
          id = "design";
          break;
        case 2:
          id = "service";
          break;
        case 3:
          id = "branding";
          break;
        case 4:
          id = "managment";
          break;
        default:
          break;
      }
      console.log(id);
        console.log(id);
      $location.path("" + id);
    };
})