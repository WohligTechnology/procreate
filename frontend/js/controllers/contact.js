myApp.controller('ContactCtrl', function ($scope, TemplateService, NavigationService, $timeout,$location) {
        $scope.template = TemplateService.getHTML("content/contact.html");
        TemplateService.title = "Contact"; //This is the Title of the Website
        //   TemplateService.header = "views/template/header2.html"; 
         TemplateService.cssMain = "Contact"; 
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
        $scope.submitForm = function (data) {
            console.log(data);
            $scope.formSubmitted = true;
        };
          initMap = function () {
            var uluru = {
                lat: 19.166411,
                lng: 72.847466
            };
            // Styles a map in night mode.
            var map = new google.maps.Map(document.getElementById('map'), {
                center: uluru,
                scrollwheel: false,
                zoom: 15,
            });

            var marker = new google.maps.Marker({
                position: uluru,
                title: "Procreate",
                // icon: "http://gsourcedata.com/img/landing-logo.png/",
                map: map

            });
        }
        $timeout(function () {
            initMap();
        }, 500);
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
     $scope.form = {};
        $scope.sendMail = function (data) {
            $scope.message = "";

            console.log("******** inside sendMail *********", data);
            if (data && data.email != null) {
                $scope.url = "Enquirey/mailSends";
                NavigationService.apiCallWithData($scope.url, data, function (data) {
                    if (data) {
                        $scope.message = "Thank you for submitting the form";
                        $scope.form = {};

                    }
                });

            } else {
                console.log("******** inside sendMails *********", data);
                console.log("******** inside sendMail *********", data);
                $scope.message = "Please enter valid email id"
            }
        }

        $scope.gotoTop = function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        };
    })