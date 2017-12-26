(function() {
  'use strict';
  angular.module('app').controller('trackerController', trackerController);
  trackerController.$inject = [
  ];

  function trackerController(
  ) {
    var vm = this;

    onInit();

    function onInit() {
      console.log('Hello World!!');
    }
  }
})();