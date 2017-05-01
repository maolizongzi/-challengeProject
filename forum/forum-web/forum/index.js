var mainWarp = angular.module('mainWrap', ['ui.router']);
mainWarp.controller('groupLoadController', function ($scope, $http, $state) {
    $http.get('http://127.0.0.1:8081/forum/item/topics').then(function (response) {
        $scope.topics = response.data;
    });
});
mainWarp.controller('articleListController', function ($scope, $stateParams) {
    $scope.topicTitle = $stateParams.topicTitle;
    $scope.itemTopicId = $stateParams.itemTopicId;
});


mainWarp.config(function ($stateProvider) {
    $stateProvider.state('signIn', {
        url: '/login',
        templateUrl: '../sign/sign-in.html'
    });
    $stateProvider.state('group', {
        url: '/group',
        templateUrl: '../group/group.html',
        controller: 'groupLoadController'
    });
    $stateProvider.state('article-list', {
        url: 'article-list/:itemTopicId',
        templateUrl: '../article-list/article-list.html',
        controller: 'articleListController'
    });
});