(function() {
  "use strict";

  var koa = require('koa'),
      router = require('koa-router')(),
      bodyParser = require('koa-body-parser'),
      letterMap = require("./letter_map");

  var app = koa();
  app.use(bodyParser());
  app.use(router.routes());

  router.get("/test", function *() {
    var text = this.request.body.text;

    var result = [];

    for (var i = 0; i < text.length; i++) {
      let arabic = letterMap[text.charAt(i)].unicode;
      result.push(arabic);
    }

    this.body = {
      "original": text,
      "arabic": result.reverse().join("")
    };
  });

  var server = app.listen(3000, function() {
    console.log("server ready");
  });

})();

