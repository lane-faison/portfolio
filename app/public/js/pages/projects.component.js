(function () {
  'use strict'

  angular.module('app')
    .component('projects', {
      templateUrl: './js/templates/projects.html',
      controller: ProjectController
    })

  ProjectController.$inject = ['$http']
  function ProjectController($http) {
    const vm = this

    vm.$onInit = function () {
      $http.get('/projects').then(function (result) {
        vm.projects = result.data
        console.log(vm.projects)
      })
    }
  }
}())
