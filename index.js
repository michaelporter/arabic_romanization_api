(function() {
  "use strict";

  var koa = require('koa'),
      router = require('koa-router')(),
      bodyParser = require('koa-body-parser'),
      testRoute = require('./routes/test');

  var app = koa();
  app.use(bodyParser());
  app.use(router.routes());

  router.get("/test", testRoute);

  var server = app.listen(3000, function() {
    console.log("server ready");
  });

})();

