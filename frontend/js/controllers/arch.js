myApp.controller('ArchCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/arch.html");
        TemplateService.title = "Arch"; //This is the Title of the Website
        //   TemplateService.header = "views/template/header2.html"; 
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
        $scope.submitForm = function (data) {
            console.log(data);
            $scope.formSubmitted = true;
        };
    })