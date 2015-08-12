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
            services: 'Chatbox',
            contact: 'Contact'
        },
        header: {
            title: 'Ionic App Labs',
            subtitle: 'Javascript Cross-Platform Full Stack Solution'                        
        },
        sections: [
            {
                divClass: sectionClassesLeft.div,
                contentClass: sectionClassesLeft.content,
                imageClass: sectionClassesLeft.image,
                title: $sce.trustAsHtml('Easy to Find and Chat Cross Platforms'),
                content: $sce.trustAsHtml('<ul><li>Contact Management</li><li>Enterprise Directory Integration<ul><li>Active Directory</li><li>LDAP</li></ul></li><li>Chat Room Management</li></ul>'),
                image: 'img/phones.png'
            },
            {
                divClass: sectionClassesRight.div,
                contentClass: sectionClassesRight.content,
                imageClass: sectionClassesRight.image,
                title: $sce.trustAsHtml('Support Multiple File Formats and Easy to Share'),
                content: $sce.trustAsHtml('<ul><li>Text (Collapse/Expand-able if long messages)</li><li>Image</li><li>Audio</li><li>Video</li><li>Document</li><li>URL - Preview to prevent unsafes</li></ul>'),
                image: 'img/phones-1.png'
            },
            {
                divClass: sectionClassesLeft.div,
                contentClass: sectionClassesLeft.content,
                imageClass: sectionClassesLeft.image,
                title: $sce.trustAsHtml('Messages will be Never Hard to Find through Useful Filter and Label Tools'),
                content: $sce.trustAsHtml('<ul><li>Label/Unlabel Message</li><li>Star/Unstar Message</li><li>Full-Text Search</li><li>Filter by Who/When/Labels(Tags)</li></ul>'),
                image: 'img/phones-2.png'
            },
            {
                divClass: sectionClassesRight.div,
                contentClass: sectionClassesRight.content,
                imageClass: sectionClassesRight.image,
                title: $sce.trustAsHtml('Cooperate and Manage Files in the Project/Team Room'),
                content: $sce.trustAsHtml('<ul><li>Search File by Format</li><li>Label(Tag) Management</li><li>Quick Sharing</li></ul>'),
                image: 'img/phones-3.png'
            },
            {
                divClass: sectionClassesLeft.div,
                contentClass: sectionClassesLeft.content,
                imageClass: sectionClassesLeft.image,
                title: $sce.trustAsHtml('Shared Links will be Retained and Easy to Find and Manage'),
                content: $sce.trustAsHtml('<ul><li>Preview Abstract of URLs</li><li>Label/Star Management</li><li>Quick Sharing</li><li>Remove Duplicates</li></ul>'),
                image: 'img/phones-4.png'
            },
            {
                divClass: sectionClassesRight.div,
                contentClass: sectionClassesRight.content,
                imageClass: sectionClassesRight.image,
                title: $sce.trustAsHtml('Group Voice/Video Conference'),
                content: $sce.trustAsHtml('<ul><li>Voice/Video Togglable</li><li>Maximum 9 Members</li><li>P-to-P WebRTC</li></ul>'),
                image: 'img/phones-5.png'
            },
        ],
        contact: {
            title: 'ionicapplabs@gmail.com',
            github: 'https://github.com/IonicAppLabs'
        },
        footer: {
            title: 'Copyright © Ionic App Labs 2015. All Rights Reserved'
        }
    };
});
