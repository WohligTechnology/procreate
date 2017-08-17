myApp.controller('ThankYouCtrl', function ($scope, TemplateService, NavigationService, $timeout,$location) {
        $scope.template = TemplateService.getHTML("content/thankyou.html");
        TemplateService.title = "Thankyou"; //This is the Title of the Website
        //   TemplateService.header = "views/template/header2.html"; 
       TemplateService.cssMain = "Portfolio";
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
   
                    goog_report_conversion = function (url) {
                        goog_snippet_vars();
                        window.google_conversion_format = "3";
                        var opt = new Object();
                        console.log("google");
                        opt.onload_callback = function () {
                            if (typeof (url) != 'undefined') {
                                window.location = url;
                            }
                        }
                        var conv_handler = window['google_trackConversion'];
                        if (typeof (conv_handler) == 'function') {
                            conv_handler(opt);
                        }
                    }
    })