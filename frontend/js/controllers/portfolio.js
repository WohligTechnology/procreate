myApp.controller('PortfolioCtrl', function ($scope, TemplateService, NavigationService, $timeout,$state,$location) {
    $scope.template = TemplateService.getHTML("content/portfolio.html");
    TemplateService.title = "Packaging & Corporate Branding Company"; //This is the Title of the Website
     TemplateService.cssMain = "Portfolio";
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
          id = "/offering/strategy";
          break;
        case 1:
          id = "/offering/design";
          break;
        case 2:
          id = "/offering/service";
          break;
        case 3:
          id = "/offering/branding";
          break;
        case 4:
          id = "/offering/management";
          break;
        default:
          break;
      }
      console.log(id);
        console.log(id);
      $location.path(id);
    };
})