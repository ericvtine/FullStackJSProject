'use strict';

(function(){

class GamesComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('meanStackApp')
  .component('games', {
    templateUrl: 'app/games/games.html',
    controller: GamesComponent,
    controllerAs: 'gamesCtrl'
  });

})();
