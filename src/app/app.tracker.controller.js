(function() {
  'use strict';
  angular.module('app').controller('trackerController', trackerController);
  trackerController.$inject = [
    'pincodeDataFactory'
  ];

  function trackerController(
    pincodeDataFactory
  ) {
    var vm = this;
    vm.pincodes = [];
    vm.search = {};
    vm.search.pincode = '';
    vm.activePincodeData = {};
    vm.fullHeight = window.innerHeight;
    vm.onClickMapMarker = vm.onClickMapMarker;
    onInit();

    function onInit() {
      initializePincodes()
    }

    function initializePincodes() {
      pincodeDataFactory.getPincodes().then(function(pincodes){
        vm.pincodes = pincodes;
      });
    }

    function onClickMapMarker(pincodeData) {
      console.log(pincodeData);
      console.log('hrllo')
      vm.activePincodeData = pincodeData;
    }
  }
})();