myApp.controller('SgsportsCtrl', function ($scope, TemplateService, NavigationService, $timeout,$location) {
        $scope.template = TemplateService.getHTML("content/sgsports.html");
        TemplateService.title = "sgsports"; //This is the Title of the Website
        //   TemplateService.header = "views/template/header2.html"; 
           TemplateService.cssMain = "Portfolio";
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
      
        
    })