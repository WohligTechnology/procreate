myApp.controller('PortfolioCtrl', function ($scope, TemplateService, NavigationService, $timeout,$state,$location,$uibModal) {
    $scope.template = TemplateService.getHTML("content/portfolio.html");
    // TemplateService.title = "Packaging & Corporate Branding Company"; //This is the Title of the Website
      TemplateService.title = "Portfolio - Procreate Design";
     TemplateService.cssMain = "Portfolio";
      TemplateService.description = "content=&quot;If you are thinking about redesigning your brand or product design, be sure to take a look at the list of design portfolios by Procreate Design.";
       TemplateService.keywords = "design portfolios, procreate design portfolio, product design, brand design";
                //  TemplateService.canonical = "Work";
    $scope.navigation = NavigationService.getNavigation();
    $scope.formSubmitted = false;
    $scope.submitForm = function (data) {
        console.log(data);
        $scope.formSubmitted = true;
    };

 $scope.login = function () {
            $scope.loginModal = $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/login.html',
                scope: $scope,
                size: 'lg',
                windowClass: "login-modal"

            });
        };
        $scope.loginclose = function () {
            $scope.loginModal.close();
        };

 $scope.belicious = function () {
            $scope.loginModal = $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/belicious.html',
                scope: $scope,
                size: 'lg',
                windowClass: "belicious-modal"

            });
        };
$scope.phalse = function () {
            $scope.loginModal = $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/phalse.html',
                scope: $scope,
                size: 'lg',
                windowClass: "phalse-modal"

            });
        };
        $scope.bael = function () {
            $scope.loginModal = $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/bael.html',
                scope: $scope,
                size: 'lg',
                windowClass: "bael-modal"

            });
        };
          $scope.nerolac = function () {
            $scope.loginModal = $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/nerolac.html',
                scope: $scope,
                size: 'lg',
                windowClass: "nerolac-modal"

            });
        };
         $scope.redgel = function () {
            $scope.loginModal = $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/redgel.html',
                scope: $scope,
                size: 'lg',
                windowClass: "redgel-modal"

            });
        };
         $scope.parachute = function () {
            $scope.loginModal = $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/parachute.html',
                scope: $scope,
                size: 'lg',
                windowClass: "parachute-modal"

            });
        };
         $scope.maxitos = function () {
            $scope.loginModal = $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/maxitos.html',
                scope: $scope,
                size: 'lg',
                windowClass: "maxitos-modal"

            });
        };
         $scope.vachan = function () {
            $scope.loginModal = $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/vachan.html',
                scope: $scope,
                size: 'lg',
                windowClass: "vachan-modal"

            });
        };
         $scope.vachan2 = function () {
            $scope.loginModal = $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/vachan2.html',
                scope: $scope,
                size: 'lg',
                windowClass: "vachan2-modal"

            });
        };
          $scope.parle = function () {
            $scope.loginModal = $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/parle.html',
                scope: $scope,
                size: 'lg',
                windowClass: "parle-modal"

            });
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