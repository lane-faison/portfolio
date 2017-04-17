(function () {
  'use strict'

  angular.module('app')
    .component('home', {
      templateUrl: './js/templates/home.html',
      controller: HomeController
    })

  HomeController.$inject = ['$http']
  function HomeController($http) {
    const vm = this

    vm.$onInit = function () {
      $http.get('/tools').then(function (result) {
        vm.tools = result.data
      })
    }
  }
}())
