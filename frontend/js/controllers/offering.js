myApp.controller('OfferingCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $stateParams, $document, $location) {
    $scope.template = TemplateService.getHTML("content/offering.html");
    TemplateService.title = "Offering"; //This is the Title of the Website
    // TemplateService.header = "views/template/header2.html";
    $scope.navigation = NavigationService.getNavigation();
    console.log($stateParams.id);
    //  $scope.menutitle = NavigationService.makeactive($stateParams.id); 
    var id = "";

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
                id = "management";
                break;
            default:
                break;
        }
        console.log(id);
        $state.transitionTo('offeringid', {
            id: id
        }, {
            notify: false
        });
        makeAnimation(id);
        $location.replace();
    };
    console.log(id);

    function makeAnimation(id) {
        if (_.isEmpty(id)) {
            id = "offering";
        }
        var someElement = angular.element(document.getElementById(id));
        $document.scrollToElement(someElement, 85, 1400);
    }

    $scope.$on('$viewContentLoaded', function (event) {
        setTimeout(function () {
            makeAnimation($stateParams.id);
        }, 1000);
    });

    // $scope.changeURL = function (id) {
    //     // $scope.menutitle = NavigationService.makeactive(id);
    //     $state.transitionTo('offeringid', {
    //         id: id
    //     }, {
    //         notify: false
    //     });
    //     makeAnimation(id);
    //     $location.replace();
    // };
})