(function(){
  'use strict';
  angular.module('app').factory('pincodeDataFactory', pincodeDataFactory);
  pincodeDataFactory.$inject = [
    '$http'
  ];
  function pincodeDataFactory(
    $http
  ){
    var service = {
      getPincodes: getPincodes
    }
    return service;

    function getPincodes() {
      return $http.get('./data.json').then(function(res) {
        return res.data;
      });
    }
  }
})();