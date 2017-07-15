myApp.controller('VachanCtrl', function ($scope, TemplateService, NavigationService, $timeout,$location) {
        $scope.template = TemplateService.getHTML("content/vachan.html");
        TemplateService.title = "Vachan"; //This is the Title of the Website
        //   TemplateService.header = "views/template/header2.html"; 
       TemplateService.cssMain = "Portfolio";
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
   
    })