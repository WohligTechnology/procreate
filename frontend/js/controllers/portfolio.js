myApp.controller('PortfolioCtrl', function ($scope, TemplateService, NavigationService, $timeout,$state,$location) {
    $scope.template = TemplateService.getHTML("content/portfolio.html");
    // TemplateService.title = "Packaging & Corporate Branding Company"; //This is the Title of the Website
      TemplateService.title = "Portfolio - Procreate Design";
     TemplateService.cssMain = "Portfolio";
      TemplateService.description = "content=&quot;If you are thinking about redesigning your brand or product design, be sure to take a look at the list of design portfolios by Procreate Design.";
       TemplateService.keywords = "design portfolios, procreate design portfolio, product design, brand design";
                 TemplateService.canonical = "Work";
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