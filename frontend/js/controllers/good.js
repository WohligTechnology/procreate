myApp.controller('GoodCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/good.html");
        TemplateService.title = "Good"; //This is the Title of the Website
        //   TemplateService.header = "views/template/header2.html"; 
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
        $scope.submitForm = function (data) {
            console.log(data);
            $scope.formSubmitted = true;
        };
    })