var app = angular.module('DefaultApp', ['ui.bootstrap', 'duScroll']);

// Feel free to modularize angular's structure (modules, controllers, factories) into js files.
app.controller('DefaultController', function ($sce, $scope) {
    
    // Local variables to toggle odd and even section classes (left or right)
    var sectionClassesLeft = {
        div: 'content-section-a',
        content: 'col-lg-5 col-sm-6',
        image: 'col-lg-5 col-lg-offset-2 col-sm-6'
    };
    
    var sectionClassesRight = {
        div: 'content-section-b',
        content: 'col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6',
        image: 'col-lg-5 col-sm-pull-6  col-sm-6'
    };
    
     // We can add multilanguage functionality by dynamically changing the strings bellow.
     // Obs: you should append HTML using "$sce.trustAsHtml()" to bind data properly (as safe data).
    $scope.page = {
        links: {
            about: 'About',
            services: 'Services',
            contact: 'Contact'
        },
        header: {
            title: 'Landing Page',
            subtitle: 'A Template by Start Bootstrap'                        
        },
        sections: [
            {
                divClass: sectionClassesLeft.div,
                contentClass: sectionClassesLeft.content,
                imageClass: sectionClassesLeft.image,
                title: $sce.trustAsHtml('Death to the Stock Photo:<br>Special Thanks'),
                content: $sce.trustAsHtml('A special thanks to <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for providing the photographs that you see in this template. Visit their website to become a member.'),
                image: 'img/ipad.png'
            },
            {
                divClass: sectionClassesRight.div,
                contentClass: sectionClassesRight.content,
                imageClass: sectionClassesRight.image,
                title: $sce.trustAsHtml('3D Device Mockups<br>by PSDCovers'),
                content: $sce.trustAsHtml('Turn your 2D designs into high quality, 3D product shots in seconds using free Photoshop actions by <a target="_blank" href="http://www.psdcovers.com/">PSDCovers</a>! Visit their website to download some of their awesome, free photoshop actions!'),
                image: 'img/dog.png'
            },
            {
                divClass: sectionClassesLeft.div,
                contentClass: sectionClassesLeft.content,
                imageClass: sectionClassesLeft.image,
                title: $sce.trustAsHtml('Google Web Fonts and<br>Font Awesome Icons'),
                content: $sce.trustAsHtml('This template features the \'Lato\' font, part of the <a target="_blank" href="http://www.google.com/fonts">Google Web Font library</a>, as well as <a target="_blank" href="http://fontawesome.io">icons from Font Awesome</a>.'),
                image: 'img/phones.png'
            }
        ],
        contact: {
            title: 'Connect to Start Bootstrap:'
        },
        footer: {
            title: 'Copyright © Your Company 2015. All Rights Reserved'
        }
    };
});
