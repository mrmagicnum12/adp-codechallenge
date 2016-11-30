var factory;

factory = factory;

function factory($mdSidenav,$log){

  return {
     buildToggler :  buildToggler,
     close : close
  }

  function buildToggler(navID) {
    return function() {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav(navID)
        .toggle()
        .then(function () {
          $log.debug("toggle " + navID + " is done");
        });
    }
  }

  function close(navID) {
    // Component lookup should always be available since we are not using `ng-if`
    $mdSidenav(navID).close()
      .then(function () {
        $log.debug("close LEFT is done");
      });
  };  

}

module.exports = factory;     