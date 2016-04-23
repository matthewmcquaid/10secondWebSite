
module.exports = function serverRouteFactory() {

  'use strict';

  var route = function (rt) {
    return require(__dirname + '/routes/' + rt);
  };

  var applyRoutes = function (app) {

    //Insert Routes here
    app.get('/api', route('example'));

  };

  return {
    applyRoutes: applyRoutes
  };

}();
