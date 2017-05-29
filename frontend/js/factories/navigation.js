myApp.factory('NavigationService', function () {
    var navigation = [{
        name: "ABOUT US",
        classis: "active",
        anchor: "about",
        subnav: []
    }, {
        name: "WORK",
        classis: "active",
        anchor: "portfolio",
        subnav: []
    }, {
        name: "APPROACH",
        classis: "active",
        anchor: "approach",
        subnav: []
    }, {
        name: "OFFERING",
        classis: "active",
        anchor: "offering",
        subnav: []
    }, {
        name: "CONTACT",
        classis: "active",
        id: "#contact",
        subnav: []
    }
    
    ];

    return {
        getNavigation: function () {
            return navigation;
        },
    };
});