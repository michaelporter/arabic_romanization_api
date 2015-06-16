(function() {
  "use strict";

  var koa = require('koa'),
      router = require('koa-router')(),
      bodyParser = require('koa-body-parser'),
      testArabicRoute = require('./routes/test_arabic'),
      testRoute = require('./routes/test');

  var app = koa();
  app.use(bodyParser());
  app.use(router.routes());

  router.get("/test", testRoute);
  router.get("/test_arabic", testArabicRoute);

  var server = app.listen(3000, function() {
    console.log("server ready");
  });

})();

