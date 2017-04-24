(function () {
  'use strict'

  angular.module('app')
    .component('home', {
      templateUrl: './js/templates/home.html',
      controller: HomeController
    })

  HomeController.$inject = ['$http']
  function HomeController($http,$location,$anchorScroll) {
    const vm = this

    vm.$onInit = function () {
      $http.get('/tools').then(function (result) {
        vm.tools = result.data
      })
      $http.get('/projects').then(function (result) {
        vm.projects = result.data
      })
    }
  }
}())
